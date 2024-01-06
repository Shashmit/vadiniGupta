import React from "react";
import { useParams } from "react-router-dom";

function IndividualBlog({ blog }) {
  const { slug } = useParams();

  const out = blog.find((product) => product.slug === slug);

  return (
    <div className="flex flex-col items-center">
      <p
        className="font-['Courier_New'] text-[#f2f0f0]"
        style={{
          whiteSpace: "pre-line",
          lineHeight: 1.5,
          textAlign: "start",
        }}
      >
        {out.content.text}
      </p>
    </div>
  );
}

export default IndividualBlog;
