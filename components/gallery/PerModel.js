import React from "react";
import Link from "next/link";
import Image from "next/image";

function ModelPreview({ item }) {
  return (
    <section className=" w-80 rounded-lg bg-slate-200 shadow-lg   flex flex-col relative  justify-between p-2 relative h-auto mb-8">
      <main className="relative w-full  h-auto p-2">
        <Image
          src={item.url}
          layout="responsive"
          width={"100%"}
          height={"100%"}
          className="rounded"
        />
      </main>
      <h5 className="text-gray-900 p-4  mt-2 font-bold  text-center w-full text-white  bg-green-600">
        {item.title}
      </h5>
      <div className="w-full flex justify-center align-center p-2 bottom-5 m-t2">
        <Link href={`/resource/${item.catergory}/${item._id}`}>
          <a>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-green-800 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-800 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
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
