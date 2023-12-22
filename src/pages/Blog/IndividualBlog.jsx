import React from "react";
import { useParams } from "react-router-dom";

function IndividualBlog({ blog }) {
  const { slug } = useParams();

  const out = blog.find((product) => product.slug === slug);

  return (
    <div >
      <p>{out.content}</p>
    </div>
  );
}

export default IndividualBlog;
