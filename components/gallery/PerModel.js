import React from "react";
import Link from "next/link";
import Image from "next/image";

function ModelPreview({ item }) {
  return (
    <section className="rounded-lg bg-slate-200 shadow-lg max-w-sm mt-10  p-2 h-auto relative">
      <main className="w-full  relative h-40">
        <Image src={item.url} layout="fill" />
      </main>
      <h5 className="text-gray-900 p-2 font-bold mb-2 text-center w-full text-white  bg-green-800">
        {item.title}
      </h5>
      <div className="w-full flex justify-center align-center absolute bottom-5 ">
        <Link href={`/resource/${item.catergory}/${item._id}`}>
          <a>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-800 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              view
            </button>
          </a>
        </Link>
      </div>
    </section>
  );
}

export default ModelPreview;
