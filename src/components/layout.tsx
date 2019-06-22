// import { graphql, StaticQuery } from "gatsby";
import { Location } from "@reach/router";
import { Icon, Layout, Menu } from "antd";
import Image from "components/image";
import "components/layout.css";
import SEO from "components/seo";
import { author, socials } from "config";
import { Link } from "gatsby";
import _ from "lodash";
import React from "react";
import { curConfig, curNames, routes } from "routing";

// const { SubMenu } = Menu;

const socialToTheme = {
  facebook: "filled",
};

const SocialIcons = () => {
  const icons = Object.keys(socials);
  return (
    icons.length > 0 && (
      <div style={{ marginLeft: "5px" }}>
        {icons.map(social => (
          <span key={social} style={{ padding: "3px" }}>
            <a target={"_blank"} href={socials[social]}>
              <Icon type={social} theme={socialToTheme[social]} />
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

const links = location => {
  return _.map(routes, (config, name) => (
    <Menu.Item key={name}>
      <Link to={config.url}>
        <Icon type={config.icon} />
        <span>{config.label}</span>
      </Link>
    </Menu.Item>
  ));
};

class Sidebar extends React.Component {
  state = { collapsed: false };

  render() {
    return (
      <Location>
        {({ location }) => {
          const config = curConfig(location.pathname);
          return (
            <Layout.Sider
              theme={"light"}
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={collapsed => this.setState({ collapsed })}
            >
              <SEO title={config.title} />
              <div className={"picture"}>
                <Image />
              </div>
              <Menu theme="light" mode="inline" selectedKeys={curNames(location.pathname)}>
                {links(location)}
              </Menu>
            </Layout.Sider>
          );
        }}
      </Location>
    );
  }
}

class MainLayout extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
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
