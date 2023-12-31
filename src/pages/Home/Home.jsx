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
        <div className="w-full md:flex md:gap-10 flex px-6 md:px-20">
          <div className="md:flex-1 p-1 mt-2">
            <Personal />
          </div>
          <div className="md:flex-2 mt-9 max-md:hidden ">
            <h2 className="text-xl font-['Courier_New'] text-white mt-7 font-normal">
              My Poems
            </h2>
            <ul className=" mt-6">
              {blogData?.map(({ id, title, slug }) => (
                <li key={id} className="">
                  <Link
                    to={`${slug}`}
                    className="text-white hover:text-gray-500 underline underline-offset-2 font-['Courier_New']"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="px-7 md:px-20 mt-4">
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
