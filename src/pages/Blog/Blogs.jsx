import { useGetBlog } from "../../utils/useRequest";
import { Link, Outlet } from "react-router-dom";
import React from "react";

function Blogs() {
  const { data: blogData, status } = useGetBlog();
  const [idk, setIdk] = React.useState("");

  function handleClick(e) {
    setIdk("text-red-500");
  }

  return (
    <div className="">
      {status === "loading" ? (
        "Loading"
      ) : status === "error" ? (
        "Error fetching blog data"
      ) : (
        <div className="flex gap-10">
          <div className="max-md:w-full flex-1 overflow-x-hidden flex justify-start">
            <Outlet />
          </div>
          <div className="max-md:hidden">
            <h2 className="text-xl font-['Courier_New'] text-white mt-10 font-normal mb-6">
              My Poems
            </h2>
            <div className=" flex-1  flex justify-end">
              <ul>
                {blogData.map(({ id, title, slug }) => (
                  <li key={id} className="">
                    <Link
                      to={`${slug}`}
                      className={`text-white hover:text-gray-500 underline underline-offset-2 font-['Courier_New'] ${idk}`}
                      onClick={handleClick}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blogs;
