import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Card({ item }) {
  return (
    <StyledCard className="flex justify-around  ">
      <div className="w-4/5 shadow items-center" key={item._id}>
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <Image
            className="rounded-t-lg"
            src={item.img}
            alt={item.title}
            width="350px"
            height="200px"
          />
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {item.title}
            </h5>
            <Link href={item.link}>
              <a>
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Learn more
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;

const StyledCard = styled.div`
  /* width: 30%; */
  /* background: GREEN; */
  /* border: 1px solid grey; */
`;
