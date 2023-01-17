import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { FC } from "react";
import { fetchBlogPreviews } from "../graphql/queries";
import { IBlogPost } from "../graphql/types";
import { PageProps } from "./_app";

interface Props extends PageProps {
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

const Blog: FC<Props> = ({ mounted, posts }) => {
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
				title="Coder2195 - Home"
				description="The home page of coder2195's website"
			/>
			{mounted ? contents : undefined}
		</>
	);
};

export default Blog;
