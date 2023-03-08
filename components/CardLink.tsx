import Link from "next/link";
import { FC, ReactNode, useEffect, useState } from "react";

const CardLink: FC<{
  title: string;
  date: string | null | undefined;
  children: ReactNode;
  location: ReactNode;
  image: string | null | undefined;
  href: string;
}> = ({ title, children, date, location, image, href }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (mounted)
    return (
      <Link href={href} className="block w-1/2 hover:before:scale-x-0">
        <div className="overflow-hidden bg-gray-800 rounded-lg shadow-md duration-300 hover:bg-gray-900">
          {image ? (
            <div
              className="hidden w-full h-64 bg-center bg-cover md:block"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ) : undefined}
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              {date ? (
                <span className="text-sm font-medium text-gray-500 uppercase">
                  {date}
                </span>
              ) : undefined}
              <div className="flex items-center">
                {image ? (
                  <img
                    className="object-cover mr-2 w-8 h-8 rounded-full"
                    src={image}
                  />
                ) : null}
                {location ? (
                  <span className="text-sm font-medium text-gray-700">
                    {location}
                  </span>
                ) : undefined}
              </div>
            </div>
            <h4 className="mb-2 text-2xl font-bold text-gray-400">{title}</h4>
            <div className="text-white">{children}</div>
          </div>
        </div>
      </Link>
    );
  return <> </>;
};

export default CardLink;
