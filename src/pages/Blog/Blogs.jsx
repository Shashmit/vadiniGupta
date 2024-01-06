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
        <div className="flex">
          <div className="max-md:w-full flex-1 overflow-x-hidden flex justify-end">
            <Outlet />
          </div>
          <div className="max-md:hidden flex-1 flex justify-end">
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
      )}
    </div>
  );
}

export default Blogs;
