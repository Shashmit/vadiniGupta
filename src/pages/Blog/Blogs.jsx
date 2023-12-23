import { useGetBlog } from "../../utils/useRequest";
import { Link, Outlet } from "react-router-dom";
import React from "react";

function Blogs() {
  const { data: blogData, status } = useGetBlog();

  return (
    <div className="">
      {status === "loading" ? (
        "Loading"
      ) : status === "error" ? (
        "Error fetching blog data"
      ) : (
        <div className="flex">
          <div className="max-md:hidden w-2/5">
            <ul className="">
              {blogData.map(({ id, title, slug }) => (
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
          </div>
          <div className="max-md:w-full w-3/5 overflow-x-hidden flex justify-end">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
}

export default Blogs;
