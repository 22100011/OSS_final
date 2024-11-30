import React from "react";
import { Link } from "react-router-dom";
import ComparePage from "../components/comparePage";

const Add = () => {
  return (
    <div>
      <h1>Compare Page</h1>
      <Link to="/data">
        <button>data Page</button>
      </Link>
      <ComparePage/>
    </div>
    
  );
};

export default Add;
