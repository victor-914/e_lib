import React from "react";

function Materials() {
  return (
    <div class="flex justify-center m-6">
      <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
        <div class="py-3 px-6 border-b border-gray-300">Sensory Organs</div>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">Sensory Organs</h5>
          <p class="text-gray-700 text-base mb-4">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <button
            type="button"
            class=" inline-block px-6 mx-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            view
          </button>

          <button
            type="button"
            class=" inline-block px-6 py-2.5 bg-slate-500 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Materials;
