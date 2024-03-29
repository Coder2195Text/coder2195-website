import { Tooltip } from "@material-tailwind/react";
import { NextSeo } from "next-seo";
import React, { FC } from "react";
import { SiNextdotjs, SiPrisma, SiRust } from "react-icons/si";
import Layout from "../components/Layout";
import { usePageUrl } from "./_app";

const PRIDE_FLAGS: {
	[key: string]: string;
} = {
	Genderfluid: "/pride/genderfluid.svg",
	Gynesexual: "/pride/gynesexual.svg",
};

function* intersperse(a: any[], delim: any) {
	let first = true;
	for (const x of a) {
		if (!first) yield delim;
		first = false;
		yield x;
	}
}

const LANGUAGE_EXPERIENCE: {
	[key: string]: Array<{ src: string | JSX.Element; name: string }>;
} = {
	//indents here
	//expected indentation here
	Expert: [
		{
			src: "/icons/html5.svg",
			name: "HTML",
		},
		{ src: "/icons/css3.svg", name: "CSS" },
		{
			src: "/icons/javascript.svg",
			name: "JavaScript",
		},
		{
			src: "/icons/typescript.svg",
			name: "TypeScript",
		},
	],
	Proficient: [
		{
			src: "/icons/csharp.svg",
			name: "C#",
		},
		{
			src: "/icons/python.svg",
			name: "Python",
		},
	],
	Familiar: [
		{
			src: "/icons/java.svg",
			name: "Java",
		},
		{
			src: "/icons/cpp.svg",
			name: "C++",
		},
	],
	Learning: [
		{
			src: <SiRust size={64} className="inline-block" />,
			name: "Rust",
		},
	],
};

const TOOLS_EXPERIENCE: {
	[key: string]: Array<{ src: string | JSX.Element; name: string }>;
} = {
	Proficient: [
		{
			src: "/icons/neovim.svg",
			name: "Neovim",
		},
		{
			src: "/icons/react.svg",
			name: "React",
		},
		{
			src: <SiNextdotjs size={64} className="inline-block" />,

			name: "NextJS",
		},
		{
			src: <SiPrisma size={64} className="inline-block" />,
			name: "Prisma",
		},
	],
	Familiar: [
		{
			src: "/icons/godot.svg",
			name: "Godot",
		},
	],
};

const PROFILE_SECTIONS: { [key: string]: JSX.Element } = {
	Education: (
		<>
			A random high school junior developer who is trying to wrestle out the
			tough parts of a programming career... :')
			<br />
			A STEM fan, and I love to learn new things.
			<br />
			English is not my strongpoint...
			<br />
			As for other subjects, I don't know how I get 90's and 100's on tests I
			don't pay attention nor study for.
		</>
	),
	"Personal Info": (
		<>
			I have ADHD + autism, and I adhere to strict time management.
			<br />I am{" "}
			{[
				...intersperse(
					Object.keys(PRIDE_FLAGS).map((flag) => (
						<span key={flag}>
							{flag} <img src={PRIDE_FLAGS[flag]} className="inline h-6" />
						</span>
					)),
					" + "
				),
			]}
			. Homophobia/Transphobia I do NOT tolerate.
			<br />
			He/him, after coming out, any pronouns are fine.
		</>
	),
	Experience: (
		<>
			Coding for 4-5 years, and can't stop won't stop.
			<h6>Languages:</h6>
			{Object.keys(LANGUAGE_EXPERIENCE).map((level) => (
				<div key={level}>
					{LANGUAGE_EXPERIENCE[level].map((icon) => (
						<Tooltip content={icon.name} key={icon.name}>
							<span>
								{typeof icon.src !== "string" ? (
									icon.src
								) : (
									<img className="inline h-16" src={icon.src} alt={icon.name} />
								)}
							</span>
						</Tooltip>
					))}{" "}
					- {level}
				</div>
			))}
			<h6>Tools:</h6>
			{Object.keys(TOOLS_EXPERIENCE).map((level) => (
				<div key={level}>
					{TOOLS_EXPERIENCE[level].map((icon) => (
						<Tooltip content={icon.name} key={icon.name}>
							<span key={icon.name}>
								{typeof icon.src !== "string" ? (
									icon.src
								) : (
									<img className="inline h-16" src={icon.src} alt={icon.name} />
								)}
							</span>
						</Tooltip>
					))}{" "}
					- {level}
				</div>
			))}
		</>
	),
	Socials: (
		<>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
			assumenda, quis vitae dolor eum eveniet quas voluptatum fuga cumque, sequi
			suscipit id alias veritatis reiciendis possimus dolorem minima?
			Accusantium, aperiam!
		</>
	),
};

const Profile: FC = () => {
	usePageUrl().setUrlHighlight("/profile");
	const contents = (
		<>
			<h3>About Me</h3>
			<div>
				{Object.keys(PROFILE_SECTIONS).map((section) => (
					<div
						key={section}
						className="inline-block w-full align-top md:w-1/2"
						id={section.toLowerCase()}
					>
						<h5>{section}</h5>
						{PROFILE_SECTIONS[section]}
					</div>
				))}
			</div>
		</>
	);
	return (
		<Layout>
			<NextSeo
				title="Coder2195 - Profile"
				description="Contents about Coder2195"
			/>
			{contents}
		</Layout>
	);
};

export default Profile;
