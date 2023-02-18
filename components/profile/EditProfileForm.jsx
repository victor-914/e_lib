import React, { useState } from "react";

function EditProfileForm() {
  const [editProfile, setEditProfile] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLogin({ ...editProfile, [name]: value });
    console.log(editProfile, "jdjd");
  };
  return (
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm absolute">
      <form>
        <div class="form-group mb-6">
          <input
            type="text"
            class="form-control block
          w-full
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
          focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
            id="name"
            onChange={handleChange}
            name="name"
            value={editProfile.name}
            placeholder="Name"
          />
        </div>
        <div class="form-group mb-6">
          <input
            type="email"
            class="form-control block
          w-full
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
          focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
            placeholder="Email"
            id="email"
            onChange={handleChange}
            name="email"
            value={editProfile.email}
          />
        </div>

        <button
          type="submit"
          class="
        w-full
        px-6
        py-2.5
        bg-green-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-green-700 hover:shadow-lg
        focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-green-800 active:shadow-lg
        transition
        duration-150
        ease-in-out"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default EditProfileForm;
