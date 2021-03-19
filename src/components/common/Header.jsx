import React from "react";
import {Link} from "@reach/router";

const Header = () => {
  return (
    <div className="container pt-3">
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/courses">Courses</Link>
      {" | "}
      <Link to="/about">About</Link>
    </div>
  );
};

export default Header;
