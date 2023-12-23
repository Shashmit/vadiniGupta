import React from "react";
import { Outlet, Link } from "react-router-dom";
import Blogs from "../Blog/Blogs";
import { LuConstruction } from "react-icons/lu";
import Navbar from "../../components/Navbar";
import IndividualBlog from "../Blog/IndividualBlog";
import Personal from "./Personal";
import { useParams } from "react-router-dom";
import { useGetBlog } from "../../utils/useRequest";

const Home = () => {
  const params = useParams();
  const isPersonalPage = Object.keys(params).length === 0;
  const { data: blogData, status } = useGetBlog();
  return (
    <div className="">
      <Navbar />
      {isPersonalPage ? (
        <div className="w-full p-5 md:flex md:justify-between flex  justify-end">
          <ul className="max-md:hidden">
            {blogData?.map(({ id, title, slug }) => (
              <li key={id} className="">
                <Link
                  to={`${slug}`}
                  className="text-blue-500 hover:text-blue-700 font-['Courier_New']"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <Personal />
        </div>
      ) : (
        <div className="p-5 ">
          <Blogs />
        </div>
      )}
    </div>
  );
};

export default Home;
{
  /* <div className="min-h-screen flex flex-col justify-center items-center">
          <LuConstruction style={{ fontSize: "7em", color: "black" }} />
          <h1 className="text-2xl">Under Construction</h1>
        </div> */
}
