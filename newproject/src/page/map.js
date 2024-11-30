import React from "react";
import { Link } from "react-router-dom";

const Add = () => {
  return (
    <div>
      <h1>Map Page</h1>
      <Link to="/main">
        <button>Main Page</button>
      </Link>
      <Link to="/data">
        <button>Map Page</button>
      </Link>
    </div>
    
  );
};

export default Add;
