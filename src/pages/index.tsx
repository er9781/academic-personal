import { Button } from "antd";
import Layout from "components/layout";
import SEO from "components/seo";
import { Link } from "gatsby";
import React from "react";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Link to="/page-2/">
    <Button type="primary">
       Go to page 2
    </Button>
    </Link>
  </Layout>
);

export default IndexPage;
