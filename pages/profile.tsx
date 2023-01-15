import { NextSeo } from "next-seo";
import Image from "next/image";
import React, { FC } from "react";
import { SiNextdotjs, SiPrisma, SiRust } from "react-icons/si";
import { PageProps } from "./_app";

const PRIDE_FLAGS: {
  [key: string]: string;
} = {
  Genderfluid: "/pride/genderfluid.svg",
  Gynesexual: "/pride/gynesexual.svg",
};

const LANGUAGE_EXPERIENCE: {
  [key: string]: Array<{ src: string | JSX.Element; name: string }>;
} = {
  Expert: [
    { src: "/icons/html5.svg", name: "HTML" },
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
      Hello, I'm Coder2195. I'm just a random high school junior developer who
      is trying to wrestle out the tough parts of a programming career... :')
      <br />
      English is not my strongpoint...
      <br />
      I mean, you don't speak in Shakespearean English on a day to day basis, so
      I advise abolishing high school English.
      <br />
      And for other subjects I don't know how I get 90's and 100's on tests I
      don't pay attention nor study for.
      <br />
      Maybe it's just other people who have skill issues... 🤔
    </>
  ),
  "Personal Info": (
    <>
      I have ADHD + autism, and I am big on time management that people
      criticize me for it.
      <br />I am proud to say I am {Object.keys(PRIDE_FLAGS).join(" + ")}. Let
      me throw some flags in your face.
      <br />
      <div>
        {Object.keys(PRIDE_FLAGS).map((flag) => (
          <div key={flag} className="inline-block w-full lg:w-1/2">
            <h6>{flag}</h6>
            <Image
              src={PRIDE_FLAGS[flag]}
              alt={flag}
              className="w-full"
              width={800}
              height={480}
            />
          </div>
        ))}
      </div>
      Until I am able to escape from parents who don't support LGBTQ+ members,
      my pronouns are he/him.
      <br />
      When the time comes, he/him/she/her/they/them are all fine.
    </>
  ),
  Experience: (
    <>
      Coding for 4-5 years, and can't stop won't stop.
      <h6>Languages:</h6>
      {Object.keys(LANGUAGE_EXPERIENCE).map((level) => (
        <div key={level}>
          {LANGUAGE_EXPERIENCE[level].map((icon) =>
            typeof icon.src !== "string" ? (
              icon.src
            ) : (
              <Image
                width={64}
                height={64}
                src={icon.src}
                key={icon.name}
                alt={icon.name}
                className="inline-block"
              />
            )
          )}{" "}
          - {level}
        </div>
      ))}
      <h6>Tools:</h6>
      {Object.keys(TOOLS_EXPERIENCE).map((level) => (
        <div key={level}>
          {TOOLS_EXPERIENCE[level].map((icon) =>
            typeof icon.src !== "string" ? (
              icon.src
            ) : (
              <Image
                width={64}
                height={64}
                src={icon.src}
                key={icon.name}
                alt={icon.name}
                className="inline-block"
              />
            )
          )}{" "}
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

const Home: FC<PageProps> = ({ mounted }) => {
  const contents = (
    <>
      <h3>About Me</h3>
      <div>
        {Object.keys(PROFILE_SECTIONS).map((section) => (
          <div
            key={section}
            className="inline-block w-full md:w-1/2 align-top"
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
    <>
      <NextSeo
        title="Coder2195 - Profile"
        description="Contents about Coder2195"
      />
      {mounted ? contents : undefined}
    </>
  );
};

export default Home;
