import React from "react";
import { Outlet } from "react-router-dom";
import Blogs from "../Blog/Blogs";
import { LuConstruction } from "react-icons/lu";
import Navbar from "../../components/Navbar";
import IndividualBlog from "../Blog/IndividualBlog";
import Personal from "./Personal";
import { useParams } from "react-router-dom";

const Home = () => {
  const params = useParams();

  if (Object.keys(params).length === 0) {
    return (
      <div className="">
        <Navbar />
        {/* <div className="min-h-screen flex flex-col justify-center items-center">
        <LuConstruction style={{ fontSize: "7em", color: "black" }} />
        <h1 className="text-2xl">Under Construction</h1>
      </div> */}
        <div className="flex flex-row">
          <div>
            <Blogs />
          </div>
          <Personal />
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-row">
        <div>
          <Blogs />
        </div>
      </div>
    </div>
  );
};

export default Home;
