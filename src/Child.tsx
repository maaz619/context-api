import React from "react";
import { UserContext } from "./Context";
const Child = () => {
  const userReturn = React.useContext(UserContext);
  return (
    <div>
      <div>
        <h1>Name:</h1>
        {userReturn?.name}
      </div>
      <div>
        <h1>email:</h1>
        {userReturn?.email}
      </div>
    </div>
  );
};

export default Child;
