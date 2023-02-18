import React from "react";
import styled from "styled-components";
import Chapter from "../../utils/Topics.array";
import Link from "next/link";
function ResourceDashBoard() {
  return (
    <StyledResourceDashboard className="p-6 font-sans list-none bg-slate-100 ">
      <header className="uppercase w-full text-start font-bold">
        Regions of the Human Anatomy
      </header>
      <div>
        {Chapter.map((chapter) => (
          <Link href={`/resource/${chapter.name}`}>
            <li className="chapterContainer  rounded shadow bg-slate-200 uppercase text-start mt-4 hover:shadow-lg hover:bg-green-700 hover:text-white">
              <div className="w-full px-4 ">{chapter.name}</div>
            </li>
          </Link>
        ))}
      </div>
    </StyledResourceDashboard>
  );
}

export default ResourceDashBoard;

const StyledResourceDashboard = styled.div`
  width: 25%;
  height: 100vh;
  /* background:; */

  li {
    line-height: 2;
    cursor: pointer;
  }

  li:hover {
  }
`;
