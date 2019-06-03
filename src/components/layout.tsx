import { graphql, StaticQuery } from "gatsby";
import React from "react";

import { Icon, Layout, Menu } from "antd";
import "components/layout.css";
import { author } from "config";

// const { SubMenu } = Menu;

const Footer = () => (
  <footer
    style={{
      display: "flex",
      justifyContent: "flex-end",
      padding: "10px",
      borderTop: "1px solid black",
      background: "light-gray",
    }}
  >{`© ${new Date().getFullYear()} - ${author}`}</footer>
);

class MainLayout extends React.Component {
  state = { collapsed: false };

  render() {
    // return (
    //   <StaticQuery
    //     query={graphql`
    //       query SiteTitleQuery {
    //         site {
    //           siteMetadata {
    //             title
    //           }
    //         }
    //       }
    //     `}
    //     render={data => (
    //       <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
    //         <div
    //           style={{
    //             flex: 1,
    //             margin: `0 auto`,
    //             maxWidth: 960,
    //             padding: `0px 1.0875rem 1.45rem`,
    //             paddingTop: 0,
    //           }}
    //         >
    //           <main>{this.props.children}</main>
    //         </div>
    //         <Footer />
    //       </div>
    //     )}
    //   />
    // );
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Layout.Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={collapsed => this.setState({ collapsed })}
        >
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
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
          <Layout.Content>{this.props.children}</Layout.Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
