import { gql, GraphQLClient } from "graphql-request";
import { IBlogPost, IProject } from "./types";

const hygraph = new GraphQLClient(process.env.HYGRAPH_URL as string);

export async function fetchBlogPreviews() {
  const { blogPosts } = await hygraph.request<{ blogPosts: IBlogPost[] }>(gql`
    query {
      blogPosts(orderBy: createdAt_DESC) {
        slug
        excerpt
        title
        coverImage {
          url
        }
      }
    }
  `);
  return blogPosts;
}

export async function fetchBlogPost(slug: string) {
  const { blogPost } = await hygraph.request<{ blogPost: IBlogPost }>(
    gql`
      query ($slug: String!) {
        blogPost(where: { slug: $slug }) {
          title
          excerpt
          coverImage {
            url
            width
            height
          }
          content {
            markdown
          }
          date
          next {
            slug
          }
          previous {
            slug
          }
        }
      }
    `,
    { slug }
  );
  return blogPost;
}

export async function fetchBlogSlugs() {
  const { blogPosts } = await hygraph.request<{ blogPosts: IBlogPost[] }>(gql`
    query {
      blogPosts {
        slug
      }
    }
  `);
  return blogPosts.map((post: IBlogPost) => {
    return post.slug;
  });
}

export async function fetchProjectPreviews() {
  const { projects } = await hygraph.request<{ projects: IProject[] }>(gql`
    query {
      projects(orderBy: createdAt_DESC) {
        slug
        excerpt
        title
        coverImage {
          url
        }
        repo
        date
      }
    }
  `);
  return projects;
}

export async function fetchProject(slug: string) {
  const { project } = await hygraph.request<{ project: IProject }>(
    gql`
      query ($slug: String!) {
        project(where: { slug: $slug }) {
          title
          repo
          excerpt
          embed
          changeLogEntries {
            version
            description {
              markdown
            }
          }
          description {
            markdown
          }
          coverImage {
            url
          }
        }
      }
    `,
    { slug }
  );
  return project;
}

export async function fetchProjectSlugs() {
  const { projects } = await hygraph.request<{ projects: IProject[] }>(gql`
    query {
      projects {
        slug
      }
    }
  `);
  return projects.map((post: IProject) => {
    return post.slug;
  });
}
