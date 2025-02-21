import { Modal, Input, notification, Select, Form } from 'antd';
const { Option } = Select;

const CreateUserModal = (props) => {
    const {
        access_token, getData,
        isCreateModalOpen, setIsCreateModalOpen
    } = props;
    // const access_token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJwZXJtaXNzaW9uIjpbIlJPTEVfVVNFUl9DUkVBVEUiLCJST0xFX1VTRVJfVVBEQVRFIl0sImV4cCI6MTgyNjM0NzE2OSwiaWF0IjoxNzM5OTQ3MTY5LCJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsIm5hbWUiOm51bGx9fQ.9XM8xgGmTD94wl4Q0RfWRvWDA1ns0UX3ehPCX43XvocsUJxyzVIal9tJQv6lyjvwtmeQv7XZzemXIlGqGxUJFA";

    const [form] = Form.useForm();

    const handleCloseCreateModal = () => {
        form.resetFields();
        setIsCreateModalOpen(false);
    };

    const onFinish = async (values) => {
        console.log('Success:', values);
        const { userName, email, password, gender, address } = values;

        const data = { userName, email, password, gender, address };
        const res = await fetch("http://localhost:8080/api/v1/users", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${access_token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        const d = await res.json();
        if (d.data) {
            // success  
            await getData();
            notification.success({
                message: "Tạo mới user thành công.",
            });
            handleCloseCreateModal();
        } else {
            notification.error({
                message: "Có lỗi xảy ra",
                description: JSON.stringify(d.message)
            });
        }
    };

    return (
        <Modal
            title="Add new user"
            open={isCreateModalOpen}
            onOk={() => form.submit()}
            onCancel={() => handleCloseCreateModal()}
            maskClosable={false}
        >
            <Form
                name="basic"
                onFinish={onFinish}
                layout="vertical"
                form={form}
            >
                <Form.Item
                    style={{ marginBottom: 5 }}
                    label="User Name"
                    name="userName"
                    rules={[{ required: true, message: 'Please input your userName!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    style={{ marginBottom: 5 }}
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input type='email' />
                </Form.Item>

                <Form.Item
                    style={{ marginBottom: 5 }}
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    style={{ marginBottom: 5 }}
                    label="Gender"
                    name="gender"
                    rules={[{ required: true, message: 'Please input your gender!' }]}
                >
                    <Input style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    style={{ marginBottom: 5 }}
                    label="Address"
                    name="address"
                    rules={[{ required: true, message: 'Please input your address!' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CreateUserModal;