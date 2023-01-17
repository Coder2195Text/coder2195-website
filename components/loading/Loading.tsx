import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

const Loading: FC = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [intervalCode, setIntervalCode] = useState<number>();
  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) => {
      setLoading(false);
    };
    //add inital load
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  });
  const element = (
    <div
      className={`w-screen ${
        loading ? "h-screen" : "h-0"
      } left-0 top-0 flex flex-col items-center justify-center z-20 overflow-hidden transition-all fixed bg-gray-600`}
    >
      <Image
        src="/favicon.ico"
        alt=""
        width={128}
        height={128}
        className="inline-block rounded-full loading-flash"
      />
    </div>
  );
  return element;
};

export default Loading;
