import { FC } from "react";
import Layout from "../components/Layout";

const UnknownPage: FC = () => {
	return (
		<Layout>
			<div className="py-6 text-center flex flex-col items-center justify-center">
				<h3>404</h3>
				<h5>This page couldn't be found...</h5>
			</div>
		</Layout>
	);
};

export default UnknownPage;
