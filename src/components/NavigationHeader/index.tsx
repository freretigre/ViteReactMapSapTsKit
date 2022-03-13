import React, { memo, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import NavigationMenu from '../NavigationMenu';
import styles from './index.module.scss';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

// FrontendMasters
// Courses Learn  Login Join Now

export default memo(() => {
    const [currentSize,  setCurrentSize] = useState('mail');
    const menuList = [
        {
            id: 1001,
            name: 'Courses',
        },
        {
            id: 1002,
            name: 'Learn',
        },
    ];

    const handleClick = (e: { key: React.SetStateAction<string>; }) => {
        console.log('click ', e);
        setCurrentSize(e.key);
    };
    
    return (
        <div className={styles.normal}>
           <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
        </div>
    );
});
