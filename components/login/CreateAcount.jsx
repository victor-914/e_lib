import React, { useState } from "react";
import axios from "axios";

function CreateAcount({ setState }) {


  const [create, setCreate] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCreate({ ...create, [name]: value });
    console.log(create, "jdjd");
  };

  const handleSubmit = async (e) => {
    setState("create");
    e.preventDefault();
    try {
      const response = await axios
        .post(
          `https://human-anatomy-backend.onrender.com/api/author/register`,
          {
            create,
          }
        )
        .then((response) => {
          console.log(URL, "dd");
          setCreate({});
          setState("login");
        });
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <form className="form pt-8">
      <div class="mb-6">
        <input
          type="text"
          name="firstName"
          required
          id="create-name-input"
          value={`${create.firstName ? create.firstName : ""}`}
          onChange={handleChange}
          class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
          placeholder="first name"
        />
      </div>
      <div class="mb-6">
        <input
          type="text"
          name="lastName"
          required
          id="name"
          value={`${create.lastName ? create.lastName : ""}`}
          onChange={handleChange}
          class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
          placeholder="last name"
        />
      </div>
      <div class="mb-6">
        <input
          type="text"
          name="email"
          required
          id="email"
          value={`${create.email ? create.email : ""}`}
          onChange={handleChange}
          class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
          placeholder="Email address"
        />
      </div>

      <div class="mb-6">
        <input
          name="password"
          id="password"
          required
          value={`${create.password ? create.password : ""}`}
          onChange={handleChange}
          type="password"
          class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
          placeholder="Password"
        />
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        class="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out w-full"
      >
        Create account
      </button>

      <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
        <p class="text-center font-semibold mx-4 mb-0">OR</p>
      </div>

      <button
        class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
        style={{ backgroundColor: "#55acee" }}
        role="button"
        onClick={() => setState("login")}
      >
        Login
      </button>
    </form>
  );
}

export default CreateAcount;
