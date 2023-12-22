import { useGetBlog } from "../../utils/useRequest";
import { Link, Outlet } from "react-router-dom";
import React from "react";
function Blogs() {
  const { data: blogData, status } = useGetBlog();

  return (
    <div>
      {status === "loading" ? (
        "Loading"
      ) : status === "error" ? (
        "Error fetching blog data"
      ) : (
        <div className="flex p-7">
          {/* Sidebar */}
          <ul className="mr-8">
            {blogData.map(({ id, title, slug }) => (
              <li key={id}>
                <Link
                  to={`${slug}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-grow p-1 w-full">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
}

export default Blogs;
