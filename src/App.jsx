import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGetBlog } from "./utils/useRequest";
import Home from "./pages/Home/Home";
import IndividualBlog from "./pages/Blog/IndividualBlog";
import Blogs from "./pages/Blog/Blogs";

import "./App.css";
const App = () => {
  const { data: blogData } = useGetBlog();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="blog" element={<Blogs blog={blogData} />} />
            <Route path=":slug" element={<IndividualBlog blog={blogData} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
