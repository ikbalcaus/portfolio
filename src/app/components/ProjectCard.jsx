import React from "react";
import Link from "next/link";

export default function({ imgUrl, title, description, gitUrl }) {
  return (
    <Link
      href={gitUrl}
      target="_blank"
    >
      <div className="hover:scale-105 transition-all duration-500">
        <div
          className="h-52 md:h-72 rounded-t-xl relative group"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        >
        </div>
        <div className="text-white rounded-b-xl mt-3 bg-[#181818]px-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
      </div>
    </Link>
  );
};
