import { Layout, Menu, Popconfirm } from 'antd'
import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    LogoutOutlined,
} from '@ant-design/icons'
import './index.scss'
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector,} from "react-redux";
import {useEffect} from "react";
import {clearUserInfo, fetchUserInfo} from "../../store/modules/user";

const { Header, Sider } = Layout

const items = [
    {
        label: 'Home',
        key: '/',
        icon: <HomeOutlined />,
    },
    {
        label: 'Article Management',
        key: '/article',
        icon: <DiffOutlined />,
    },
    {
        label: 'Write Article',
        key: '/publish',
        icon: <EditOutlined />,
    },
]

const GeekLayout = () => {
    const navigate = useNavigate();
    const onMenuClick = (route) => {
        const path = route.key;
        console.log(route)
        navigate(path)
    }
    const onConfirm = (values) => {
        console.log(values)
        dispatch(clearUserInfo())
        navigate('/login')
    }

    const location = useLocation();
    console.log(location.pathname);
    const selectedKeys = location.pathname;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserInfo())
    }, [dispatch]);

    const name = useSelector(state => state.user.userInfo.name);

    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <div className="user-info">
                    <span className="user-name">{name}</span>
                    <span className="user-logout">
            <Popconfirm title="Are you sure？" okText="quit" cancelText="cancel" onConfirm={onConfirm} >
              <LogoutOutlined /> Quit
            </Popconfirm>
          </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        theme="dark"
                        selectedKeys={selectedKeys}
                        onClick={onMenuClick}
                        items={items}
                        style={{ height: '100%', borderRight: 0 }}></Menu>
                </Sider>
                <Layout className="layout-content" style={{ padding: 20 }}>
                    <Outlet/>
                </Layout>
            </Layout>
        </Layout>
    )
}
export default GeekLayout;