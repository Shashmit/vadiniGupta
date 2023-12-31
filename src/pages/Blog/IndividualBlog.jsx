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
        <h2 className="text-2xl mb-5 font-semibold text-[#d89085]">
          {out.title}
        </h2>
        <p className="font-light text-md">{out.content.text}</p>
        <div className="flex justify-end max-w-full items-end">
          <h2 className="text-5xl ">___</h2>
        </div>

        {out.coverImage && out.coverImage.url !== null ? (
          <img src={out.coverImage.url} alt="" className="mt-4" />
        ) : null}
      </div>
    </div>
  );
}

export default IndividualBlog;
