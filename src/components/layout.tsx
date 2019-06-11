// import { graphql, StaticQuery } from "gatsby";
import { Icon, Layout, Menu } from "antd";
import Image from "components/image";
import "components/layout.css";
import { author, socials } from "config";
import _ from "lodash";
import React from "react";

// const { SubMenu } = Menu;

const SocialIcons = () => {
  return (
    Object.keys(socials).length > 0 && (
      <div style={{marginLeft: "5px"}}>
        {Object.keys(socials).map(social => (
          <span key={social} style={{ padding: "3px" }}>
            <a target={"_blank"} href={socials[social]}>
              <Icon type={social} />
            </a>
          </span>
        ))}
      </div>
    )
  );
};

const Footer = () => (
  <footer
    style={{
      display: "flex",
      justifyContent: "flex-end",
      padding: "10px",
      borderTop: "1px solid black",
      background: "light-gray",
    }}
  >
    {`© ${new Date().getFullYear()} - ${author}`}
    <SocialIcons />
  </footer>
);

class MainLayout extends React.Component {
  state = { collapsed: false };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Layout.Sider
          theme={"light"}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={collapsed => this.setState({ collapsed })}
        >
          <div className={"picture"}>
            <Image />
          </div>
          <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout>
          <Layout.Content style={{ padding: "20px" }}>{this.props.children}</Layout.Content>
          <Layout.Footer style={{ padding: "20px" }}>
            <Footer />
          </Layout.Footer>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
