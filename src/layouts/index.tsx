import { memo, FC, PropsWithChildren, Suspense, lazy } from 'react';
import {
    Link,
    Outlet,
} from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { Content, Footer } = Layout;

import NavigationHeader from '../components/NavigationHeader';
import NavigationBreadcrumb from '../components/NavigationBreadcrumb';
import NavigationSider from '../components/NavigationSider';
import NavigationMenu from '../components/NavigationMenu';

const Layouts = memo(() => {
    return (
        <Layout>
            <NavigationHeader />
            <Layout>
                <NavigationSider />
                <Layout style={{ padding: '0 24px 24px' }}>
                    <NavigationBreadcrumb />
                    <Content
                    className="site-layout-background"
                    style={{
                        padding: 0,
                        margin: 0,
                        minHeight: 280,
                        overflow: 'scroll'
                    }}
                    >
                     <Outlet />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </Layout>
    )
});

export default Layouts;