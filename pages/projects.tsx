import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { FC } from "react";
import Card from "../components/Card";
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
      <h1></h1>
      <h3 id="title">Projects</h3>
      <br />
      {projects.map((project) => (
        <Link
          href={`/projects/${project.slug}`}
          key={project.slug}
          className="hover:before:scale-x-0"
        >
          <Card
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
          </Card>
        </Link>
      ))}
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
