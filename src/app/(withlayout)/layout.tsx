
import Contents from "@/components/ui/Contents";
import SideBar from "@/components/ui/SideBar";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();

  return (
    <Layout hasSider>
      <SideBar />

      <Contents>{children}</Contents>
      {/* <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              color: 'black'
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout> */}
    </Layout>
  );
};

export default DashboardLayout;
