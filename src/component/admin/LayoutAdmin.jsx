
import {
    AppstoreOutlined,
    ExceptionOutlined,
    TeamOutlined,
    UserOutlined,
    DollarCircleOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import './layout.scss';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';

const LayoutAdmin = () => {
    const items = [{
        label: <Link to='/admin' >Dashboard</Link>,
        key: 'dashboard',
        icon: <AppstoreOutlined />
    },
    {

        label: <span>Manage Users</span>,
        // key: 'user',
        icon: <UserOutlined />,
        children: [{
            label: <Link to='/admin/user' >CRUD</Link>,
            key: 'crud',
            icon: <TeamOutlined />,
        }
        ]
    },
    {
        label: <Link to='/admin/book' >Manage Books</Link>,
        key: 'book',
        icon: <ExceptionOutlined />
    },
    {
        label: <Link to='/admin/order' >Manage Orders</Link>,
        key: 'order',
        icon: <DollarCircleOutlined />
    },
    ];

    return (
        <>
            <Layout
                style={{ minHeight: '100vh' }}
                className="layout-admin"
            >
                <Sider
                    theme='light'
                    collapsible>
                    <div style={{ height: 32, margin: 16, textAlign: 'center' }}>
                        Admin
                    </div>
                    <Menu
                        mode="inline"
                        items={items}
                    />
                </Sider>
                <Layout>
                    <Content style={{ padding: '15px' }}>
                        <Outlet />
                    </Content>
                    {/* <Footer style={{ padding: 0 }}>
                React Test Fresher &copy; Hỏi Dân IT - Made with <HeartTwoTone />
            </Footer> */}
                </Layout>
            </Layout>
        </>
    );
};

export default LayoutAdmin;