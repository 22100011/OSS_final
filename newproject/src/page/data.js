import React from "react";
import { Link } from "react-router-dom";
import DataPage from "../components/dataPage";

const Add = () => {
  return (
    <div>
      <h1>Data Page</h1>
      <Link to="/main">
        <button>Main Page</button>
      </Link>
      <Link to="/main">
        <button>Map Page</button>
      </Link>
      <Link to="/compare">
        <button>Compare Page</button>
      </Link>
      <DataPage/>
    </div>
    
  );
};

export default Add;
