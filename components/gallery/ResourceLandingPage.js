import React from "react";
import Chapter from "../../utils/Topics.array";
import Link from "next/link";
import Footer from "../footer/Footer";
function ResourceLandingPage() {
  return (
    <div className="w-full relative">
      <div className="w-full flex flex-wrap  justify-evenly  h-screen">
        {Chapter.map((chapter) => (
          <Link href={`/resource/${chapter.name}`}>
            <li
              key={chapter.name}
              className="chapterContainer  flex justify-center items-center w-4/5 h-20 rounded shadow-lg bg-slate-200 list-none uppercase text-center mt-4 hover:shadow-lg hover:bg-green-700 hover:text-white"
            >
              <div className="w-full  text-center font-bold  px-4">
                {chapter.name}
              </div>
            </li>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ResourceLandingPage;
