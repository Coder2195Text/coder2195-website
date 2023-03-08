import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { FC } from "react";
import CardLink from "../components/CardLink";
import Layout from "../components/Layout";
import { fetchProjectPreviews } from "../graphql/queries";
import { IProject } from "../graphql/types";
import { usePageUrl } from "./_app";

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

const Projects: FC<Props> = ({ projects }) => {
  usePageUrl().setUrlHighlight("/projects");
  const contents = (
    <>
      <h1></h1>
      <h3 id="title">Projects</h3>
      <br />
      <div className="">
        {projects.map((project) => (
          <CardLink
            href={`/projects/${project.slug}`}
            key={project.slug}
            date={project.date}
            title={project.title}
            location={
              project.repo ? (
                <a
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://github.com/${project.repo}`}
                >
                  {project.repo}
                </a>
              ) : undefined
            }
            image={project.coverImage?.url}
          >
            {project.excerpt}
          </CardLink>
        ))}
      </div>
    </>
  );
  return (
    <Layout>
      <NextSeo
        title="Coder2195 - Projects"
        description="The projects page of coder2195's website"
      />
      {contents}
    </Layout>
  );
};

export default Projects;
