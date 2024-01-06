import React from "react";
import { useParams } from "react-router-dom";

function IndividualBlog({ blog }) {
  const { slug } = useParams();

  const out = blog.find((product) => product.slug === slug);

  return (
    <div className="flex flex-col items-center">
      <div
        className="font-['Courier_New'] text-[#f2f0f0]"
        style={{
          whiteSpace: "pre-line",
          lineHeight: 1.5,
          textAlign: "start",
        }}
      >
        <h2 className="text-2xl mb-2 font-semibold">{out.title}</h2>
        <p>{out.content.text}</p>
        {out.coverImage && out.coverImage.url !== null ? (
          <img src={out.coverImage.url} alt="" className="mt-4" />
        ) : null}
      </div>
    </div>
  );
}

export default IndividualBlog;
