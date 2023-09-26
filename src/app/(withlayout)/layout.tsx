"use client"
import Contents from "@/components/ui/Contents";
import SideBar from "@/components/ui/SideBar";
import { isLoggedIn } from "@/services/auth.service";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const { Header, Content, Footer, Sider } = Layout;

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  
    const userLoggedIn= isLoggedIn();
    const router= useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(()=>{
        if(!userLoggedIn) {
            router.push("/login");
        }
        setIsLoading(true);
    }, [router, userLoggedIn])

    if(!isLoading) return <div>Loading...</div>

  return (
    <Layout hasSider>
      <SideBar />

      <Contents>
        {children}
        </Contents>
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
