import React from "react";
import DefaultImage from "../../assets/defaultAvatar.png";
import Image from "next/image";
import Link from "next/link";
function Avatar({ author }) {
  return (
    <div class="w-full max-w-sm  mt-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex justify-end px-4 pt-4"></div>
      <div class="flex flex-col items-center pb-10">
        <Image
          src={author.img ? author.img : DefaultImage}
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {author.name}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400 ">
          {author?.title.map((e) => (
            <span className="ml-2">{e}</span>
          ))}
        </span>
        <div class="flex mt-4 space-x-3 md:mt-6">
          <Link href={`publications/${author._id}`}>
            <a class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              view publications
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
