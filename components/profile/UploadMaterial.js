import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function UploadMaterial() {
  const [state, setState] = useState({
    title: "",
    url: "",
    catergory: "",
    credit: "",
  });

  const [err, setErr] = useState();
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  useEffect(() => {
    err && router.reload(window.location.pathname);
  }, [err]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state, "state");
    try {
      (async () => {
        try {
          const response = await axios
            .post(`http://localhost:5000/api/model`, state)
            .then((response) => response.data && setSuccess(true));
        } catch (e) {
          setErr(e);
          alert(e);
        }
      })();
    } catch (err) {
      alert(`Error: ${err.message}`);
    } finally {
      setState({
        title: "",
        url: "",
        catergory: "",
        credit: "",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      class=" w-full flex flex-col items-center justify-around bg-slate-100 p-6 h-screen"
    >
      <header className="uppercase font-bold">{`${
        success ? "Upload successfull" : "Add new resource"
      }`}</header>

      <div class="flex justify-center p-4">
        <div class="mb-3 xl:w-96">
          <label
            for="exampleFormControlInput1"
            class="form-label inline-block mb-2 text-gray-700"
          >
            Title of material
          </label>
          <input
            type="text"
            class="
        form-control
        block
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
        focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none
      "
            id="title"
            placeholder="e.g upper limb"
            name="title"
            value={state.title}
            onChange={handleChange}
          />
        </div>
      </div>

      <div class="mb-3 xl:w-96">
        <label
          for="exampleFormControlInput1"
          class="form-label inline-block mb-2 text-gray-700"
        >
          Url
        </label>
        <input
          type="text"
          class="
        form-control
        block
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
        focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none
      "
          id="url"
          placeholder="url"
          name="url"
          value={state.url}
          onChange={handleChange}
        />
      </div>
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <label className="form-label inline-block mb-2 text-gray-700">
            Catergory
          </label>
          <select
            class="form-select appearance-none
          
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
            aria-label="Default select example"
            onChange={handleChange}
            value={state.catergory}
            name="catergory"
          >
            <option>--select catergory--</option>
            <option value="upper limb">Upper limb</option>
            <option value="lower limb">Lower limb</option>
            <option value="thorax">Thorax</option>
            <option value="abdomen">Abdomen</option>
            <option value="head">Head</option>
            <option value="others">Others</option>
          </select>
        </div>
      </div>
      <div class="mb-3 xl:w-96">
        <label
          for="exampleFormControlInput1"
          class="form-label inline-block mb-2 text-gray-700"
        >
          Credit
        </label>
        <input
          type="text"
          class="
        form-control
        block
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
        focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none
      "
          id="credit"
          placeholder="credit"
          name="credit"
          value={state.credit}
          onChange={handleChange}
        />
      </div>
      <div class="mb-3 w-96 p-4 flex justify-center items-center">
        <button
          type="button"
          onClick={handleSubmit}
          class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Publish
        </button>
      </div>
    </form>
  );
}

export default UploadMaterial;
