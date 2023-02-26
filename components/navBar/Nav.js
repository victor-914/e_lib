import React from "react";
import StyledNav from "./Nav.styles";
import NavList from "../../utils/Nav.array";
import Link from "next/link";
import { handleLogout } from "../../utils/helperFunction";

function Nav() {
  return (
    <>
      <StyledNav className="bg-gradient-to-r from-green-600 to-green-800">
        <>
          {NavList.map((item) => (
            <Link href={`${item.link}`}>
              <a className=" font-medium font-sans no-underline text-white hover:underline hover:text-gray-300">
                {item.title}
              </a>
            </Link>
          ))}
        </>
        <div>
          <button
            className="p-1 bg-slate-50 hover:text-white hover:bg-green-500 rounded"
            onClick={handleLogout}
          >
            logout
          </button>
        </div>
      </StyledNav>
    </>
  );
}

export default Nav;
