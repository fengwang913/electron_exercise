 import { Outlet, useNavigate } from "react-router-dom";
 import { clearToken } from "../tools/auth";
import React from 'react';
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;


     const items = [
         {
             key: "book",
             label: "书籍列表页面",
         },
         {
             key: "community",
             label: "社区列表页面",
         },
         {
             key: "user",
             label: "用户列表页面",
         },
         {
             key: "login",
             label: "退出登录",
         },
     ];
const MyLayout: React.FC = () => {
const navigator = useNavigate();
const handleChangeRoute = (value: any) => {
     if (value === "login") {
        clearToken();
     }
     navigator(`/${value.key}`);
     };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" 
              mode="inline" 
              defaultSelectedKeys={['4']} 
              items={items} 
              onClick={(value:any) => {
                            handleChangeRoute(value);
                         }}
            />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MyLayout;