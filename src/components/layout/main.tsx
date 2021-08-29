import React from "react";
import Timer from "../timer";

const Main: React.FC = () => {
  return (
    <div>
      <div>This is body</div>
      <div><span>Current Time: </span><Timer/></div>
    </div>
  );
};
export default Main;
