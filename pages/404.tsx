import { FC } from "react";

const UnknownPage: FC = () => {
  return (
    <div className="h-[calc(100vh-120px)] text-center flex flex-col items-center justify-center">
      <div>
        <h3>404</h3>
        <h5>This page couldn't be found...</h5>
      </div>
    </div>
  );
};

export default UnknownPage;
