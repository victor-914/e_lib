import React, { useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import AuthContext from "../../context/contextProvider";

function Login({ setState }) {
  const URL = process.env.API_URL;

  const { setAuth, auth } = useContext(AuthContext);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .post(`${URL}/api/author/login`, login)
        .then((response) => {
          setAuth(response?.data);
          localStorage.setItem("access", response?.data);
          response.data && router.push("/profile");
        });
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <form className="form pt-8 sm:w-3/5 sm:m-auto">
      <div class="mb-6">
        <label className=" text-gray-500">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          required
          value={login.email}
          onChange={handleChange}
          class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
          placeholder="Email address"
        />
      </div>

      <div class="mb-6">
        <label className=" text-gray-500">Password</label>

        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={handleChange}
          value={login.password}
          class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
          placeholder="Password"
        />
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        class="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out w-full"
      >
        Login
      </button>

      <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
        <p class="text-center font-semibold mx-4 mb-0">OR</p>
      </div>

      <button
        class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
        style={{ backgroundColor: "#55acee" }}
        role="button"
        onClick={() => setState("create")}
      >
        Create account
      </button>
    </form>
  );
}

export default Login;
