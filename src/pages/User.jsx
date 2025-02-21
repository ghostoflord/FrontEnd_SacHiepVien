import { useEffect, useState } from "react";
import { Button, notification, Popconfirm, Table } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import CreateUserModal from "../component/admin/user/user.update";
const User = () => {
    const [listUsers, setListUsers] = useState([]);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const access_token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJwZXJtaXNzaW9uIjpbIlJPTEVfVVNFUl9DUkVBVEUiLCJST0xFX1VTRVJfVVBEQVRFIl0sImV4cCI6MTgyNjQxOTU2MywiaWF0IjoxNzQwMDE5NTYzLCJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsIm5hbWUiOm51bGx9fQ.kg5SoKi27de7-sS_AmtyI3S5cqPhcWslICJw9_eoCDW3-dsugPzuD2MkN4qKKsIega6RmyG9Vnn6o3kFnYT-Ww";

    // const access_token = localStorage.getItem("access_token");
    useEffect(() => {
        //update
        getData()
    }, [])
    //Promise
    const getData = async () => {
        const res = await fetch(
            "http://localhost:8080/api/v1/all/users",
            {
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    "Content-Type": "application/json",
                },
            })
        const d = await res.json();
        if (!d.data) {
            notification.error({
                message: JSON.stringify(d.message)
            })
        }
        setListUsers(d.data.result)
        console.log("check res", d.data)
    }

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
        },
        {
            title: 'User Name',
            dataIndex: 'userName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                    />
                    <Popconfirm
                    >
                        <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                    </Popconfirm>
                </div>
            ),
        },
    ];

    // lift-up state 
    return (
        <div style={{ padding: "20px" }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <h2>Table Users</h2>
                <div>
                    <Button
                        icon={<PlusOutlined />}
                        type={"primary"}
                        onClick={() => setIsCreateModalOpen(true)}
                    >Add new</Button>
                </div>

            </div>
            {/* <UserForm loadUser={loadUser} /> */}
            <Table
                columns={columns}
                dataSource={listUsers}
                rowKey="id"
            />

            <CreateUserModal
                access_token={access_token}
                getData={getData}
                isCreateModalOpen={isCreateModalOpen}
                setIsCreateModalOpen={setIsCreateModalOpen}
            />

        </div>
    )
}
export default User;