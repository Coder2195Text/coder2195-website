import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { FC } from "react";
import { fetchProjectPreviews } from "../graphql/queries";
import { IProject } from "../graphql/types";

interface Props {
  projects: Array<IProject>;
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await fetchProjectPreviews();
  return {
    props: {
      projects,
    },
    revalidate: 10,
  };
};

const Blog: FC<Props> = ({ projects }) => {
  const contents = (
    <>
      <h3 id="title">Projects</h3>
      <br />
      {JSON.stringify(projects)}
    </>
  );
  return (
    <>
      <NextSeo
        title="Coder2195 - Projects"
        description="The projects page of coder2195's website"
      />
      {contents}
    </>
  );
};

export default Blog;
