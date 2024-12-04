import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "../assets/styles/style.scss";

const MarkdownTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <div className="p-16">
        <h2 class="fancy font-semibold text-4xl">We are Hiring.</h2>
        <div className="flex justify-between py-6">
          <h1 className="font-semibold text-lg">{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
        </div>

        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

export default MarkdownTemplate;
