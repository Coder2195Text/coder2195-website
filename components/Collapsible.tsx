import { FC, ReactNode, useState } from "react";
import { BsTriangleFill } from "react-icons/bs";

const Collapsible: FC<{
  children: ReactNode;
  title: ReactNode;
  color: string;
}> = ({ children, title, color }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div
      className={`${collapsed
          ? "bg-opacity-10 hover:bg-opacity-30"
          : "bg-opacity-50 hover:bg-opacity-70"
        } 
          ${color} rounded-2xl p-4 overflow-hidden transition-all duration-500`}
    >
      <button
        onClick={() => {
          setCollapsed(!collapsed);
        }}
        className="w-full"
      >
        <div className="w-full flex justify-between content-between items-center">
          {title}{" "}
          <BsTriangleFill
            className={`inline ${collapsed ? "rotate-90" : "rotate-180"
              } transition-all`}
          />
        </div>
        {collapsed ? [] : children}
      </button>
    </div>
  );
};

export default Collapsible;
