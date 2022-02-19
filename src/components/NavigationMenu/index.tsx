import React, { memo, useState } from 'react'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

const { SubMenu } = Menu;

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
            <Menu onClick={handleClick} selectedKeys={[currentSize]} mode="horizontal">
                <Menu.Item key="mail" icon={<MailOutlined />}>Courses</Menu.Item>
                <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>Articles</Menu.Item>
                <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Learn">
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                </a>
                </Menu.Item>
            </Menu>
        </div>
    );
});
