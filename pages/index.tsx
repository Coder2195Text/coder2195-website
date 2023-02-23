import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

const Home: FC = () => {
  const contents = (
    <>
      <h3>Coder2195 the Great</h3>
      <div className="flex items-stretch">
        <div className="inline-block md:w-1/2">
          <BsFillExclamationTriangleFill size={32} className="inline-block" />{" "}
          The average coder ¯\_(ツ)_/¯
          <br />
          Just look around...
          <br />
          <Link href="/profile">Read More...</Link>
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
      <hr className="border-dotted my-5" />
      <h5>Projects</h5>
      <div> Work in progress </div>
      <h5>Blog Posts</h5>
      <div> Work in progress </div>
    </>
  );
  return (
    <>
      <NextSeo
        title="Coder2195 - Home"
        description="The home page of coder2195's website"
      />
      {contents}
    </>
  );
};

export default Home;
