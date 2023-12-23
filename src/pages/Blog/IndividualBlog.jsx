import React from "react";
import { useParams } from "react-router-dom";

function IndividualBlog({ blog }) {
  const { slug } = useParams();

  const out = blog.find((product) => product.slug === slug);

  return (
    <div className="flex flex-col items-center">
      <p
        className="poem"
        style={{
          whiteSpace: "pre-line",
          lineHeight: 1.5,
          textAlign: "end",
        }}
      >
        {out.content.text}
      </p>
    </div>
  );
}

export default IndividualBlog;
