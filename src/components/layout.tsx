import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Header from "components/header";
import "components/layout.css";
import { author } from "config";

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

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            flex: 1,
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
