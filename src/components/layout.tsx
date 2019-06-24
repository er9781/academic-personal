// import { graphql, StaticQuery } from "gatsby";
import { Location } from "@reach/router";
import { Icon, Layout, Menu } from "antd";
import Image from "components/image";
import "components/layout.css";
import SEO from "components/seo";
import { author, institution, socials, title } from "config";
import { Link } from "gatsby";
import _ from "lodash";
import React from "react";
import { Config, curConfig, curNames, getTitle, routes } from "routing";

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

const Pic = () => (
  <div className={"picture"}>
    <Image />
  </div>
);

const Blurb = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10px",
        textAlign: "right",
      }}
    >
      <div style={{ fontWeight: "normal" }}>{author}</div>
      <div style={{ fontSize: "10px", fontWeight: "lighter" }}>
        {title} - {institution}
      </div>
    </div>
  );
};

const links = location => {
  return routes.map(([name, config]) => {
    const conf = config as Config;
    return (
      <Menu.Item key={name as string}>
        <Link to={conf.url}>
          <Icon type={conf.icon} />
          <span>{conf.label}</span>
        </Link>
      </Menu.Item>
    );
  });
};

class Sidebar extends React.Component {
  state = { collapsed: false };

  render() {
    return (
      <Location>
        {({ location }) => {
          const config = curConfig(location.pathname);
          const pageTitle = getTitle(config);
          return (
            <Layout.Sider
              theme={"light"}
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={collapsed => this.setState({ collapsed })}
            >
              {pageTitle && <SEO title={pageTitle} />}
              <Pic />
              <Blurb />
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
