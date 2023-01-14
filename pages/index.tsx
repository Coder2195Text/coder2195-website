import { NextSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <NextSeo
        title="Coder2195 - Home"
        description="The home page of coder2195's website"
      />

      <h3>Coder2195 the Great</h3>
      <div className="flex items-stretch">
        <div className="inline-block md:w-1/2">
          Hello, I'm Coder2195. I'm just a random high school junior developer
          who is trying to wrestle out the tough parts of a programming
          career... :')
          <br />
          4-5 years of coding already and I hope I will make it to the big
          companies interview without being tossed. :')
        </div>
        <div className="hidden md:inline-block w-1/2 text-center">
          <Image
            src="/favicon.ico"
            alt=""
            width={128}
            height={128}
            className="inline-block rounded-full"
          />
        </div>
      </div>
      <hr className="border-dotted border-blue-gray-900 dark:border-blue-gray-100 my-5" />
      <h5>Projects</h5>
      <div> hi </div>
      <h5 id="links">links placeholder</h5>
    </>
  );
};

export default Home;
