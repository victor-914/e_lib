import React, { useState, useContext } from "react";
import EditProfileForm from "./EditProfileForm";
import AuthContext from "../../context/contextProvider";

function ProfileCard() {
  const [openEdit, setOpenEdit] = useState(false);
  const { auth } = useContext(AuthContext);
  const [state, setState] = useState(auth);

  console.log(auth);
  return (
    <>
      {openEdit && <EditProfileForm />}
      <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4">
        <div class="rounded  p-6">
          <div class="pb-6">
            <label for="name" class="font-semibold text-gray-700 block pb-1">
              Name
            </label>
            <div class="flex">
              <input
                id="username"
                class="border-1  rounded-r px-4 py-2 w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none
                "
                type="text"
                value={`${state ? state.firstname + " " + state.lastname : ""}`}
              />
            </div>
          </div>
          <div class="">
            <label for="about" class="font-semibold text-gray-700 block pb-1">
              Email
            </label>
            <input
              id="email"
              class="border-1  rounded-r px-4 py-2 w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none
              "
              type="email"
              value={`${state.email ? state.email : ""}`}
            />
          </div>
        </div>
      </div>
      <div class="flex  m-auto  px-20 space-x-2 justify-start">
        <button
          onClick={() => setOpenEdit(!openEdit)}
          type="button"
          class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          edit profile
        </button>
      </div>
    </>
  );
}

export default ProfileCard;
