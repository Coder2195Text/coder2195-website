import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { FC } from "react";
import { fetchBlogPreviews } from "../graphql/queries";
import { IBlogPost } from "../graphql/types";
import { usePageUrl } from "./_app";

interface Props {
  posts: Array<IBlogPost>;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchBlogPreviews();
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

const Blog: FC<Props> = ({ posts }) => {
  usePageUrl().setUrlHighlight("/blog");
  const contents = (
    <>
      <h3 id="title">Blog Posts</h3>
      <br />
      {JSON.stringify(posts)}
    </>
  );
  return (
    <>
      <NextSeo
        title="Coder2195 - Blog"
        description="The blog page of coder2195's website"
      />
      {contents}
    </>
  );
};

export default Blog;
