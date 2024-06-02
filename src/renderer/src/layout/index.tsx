import { Outlet, useNavigate } from "react-router-dom";
import { clearToken } from "../tools/auth";
// import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { useState } from "react";
import {
  ApartmentOutlined,
  FileOutlined,
  PieChartOutlined,
  // TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;


     const items = [
         {
             key: "linkUp",
             label: "连连看",
             icon:<ApartmentOutlined />

         },
         {
             key: "community",
             label: "社区列表页面",
             icon:<FileOutlined />

         },
         {
             key: "user",
             label: "用户列表页面",
             icon:<PieChartOutlined />

         },
         {
             key: "login",
             label: "退出登录",
             icon:<UserOutlined />

         },
     ];
const MyLayout: React.FC = () => {
const navigator = useNavigate();
const [collapsed, setCollapsed] = useState(false);
const [title, setTitle] = useState("连连看");

const handleChangeRoute = (value: any) => {
     if (value === "login") {
        clearToken();
     }
    

    switch(value.key){
      case "linkUp": 
        setTitle("连连看");
        break;
      default:
        setTitle(value.key);break;
    }
     navigator(`/${value.key}`);
     };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh',margin:"0px"}}>
      <Sider
        // breakpoint="lg"
        collapsible
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)}
        // collapsedWidth="0"
        // onBreakpoint={(broken) => {
        //   console.log(broken);
        // }}
        // onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type);
        // }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" 
              mode="inline" 
              defaultSelectedKeys={['1']} 
              items={items} 
              onClick={(value:any) => {
                            handleChangeRoute(value);
                         }}
            />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div style={{textAlign:"center",
                      fontSize:'32px',
                      marginLeft:"20px",
                       width:'100px'}}>
            {title}
          </div>
        </Header>
        <Content style={{ margin: '16px 16px 0px' }}>
          <div
            style={{
              padding: 24,
              minHeight: 460,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          electron demo for WF
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MyLayout;