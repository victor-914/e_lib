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
              <a
                key={item.title}
                className="font-medium font-sans no-underline text-white hover:underline hover:text-gray-300"
              >
                {item.title}
              </a>
            </Link>
          ))}
        </>
      </StyledNav>
    </>
  );
}

export default Nav;
