import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { FC } from "react";
import { fetchBlogPreviews } from "../graphql/queries";
import { IBlogPost } from "../graphql/types";

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
  return (
    <div>
      <h3 id="title">Blog Posts</h3>
      <br />
      {JSON.stringify(posts)}
    </div>
  );
};

export default Blog;
