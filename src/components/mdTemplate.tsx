import { graphql } from "gatsby";
import React from "react";
import MainLayout from "./layout";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  return (
    <MainLayout>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </MainLayout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
      }
    }
  }
`;
