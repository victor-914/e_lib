import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import FormData from "form-data";
import { handleLogout } from "../../utils/helperFunction";
function UploadMaterial() {
  // useEffect(() => {
  //   const auth = localStorage.getItem("access");
  //   if (!auth) {
  //     router.push("/login");
  //   }
  // }, []);

  const [state, setState] = useState({
    title: "",
    comment: "",
    catergory: "",
    file: "",
  });

  const [success, setSuccess] = useState("");
  const [files, setFiles] = useState();
  const router = useRouter();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    if (name === "file") {
      let fileArray = Object.values(e.target.files);
      setFiles(fileArray);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    let entries = Object.entries(state);
    for (let i = 0; i < files.length; i++) {
      formData.append(files[i].name, files[i]);
    }
    for (let ii = 0; ii < entries.length; ii++) {
      const key = entries[ii][0];
      const value = entries[ii][1];
      formData.append(key, value);
    }
    try {
      (async () => {
        try {
          const response = await axios
            .post(
              `https://human-anatomy-backend.onrender.com/api/file/img`,
              formData
            )
            .then((response) => {
              setSuccess("uploaded successfully");
              alert(success);
            });
        } catch (e) {
          alert(e);
        }
      })();
    } catch (err) {
      alert(`Error: ${err.message}`);
    } finally {
      setState({
        title: "",
        comment: "",
        catergory: "",
        file: "",
      });
    }
  };

  return (
    <section className="flex justify-between flex-col">
      <div className="w-full  p-2 flex justify-end items-center overflow-x-hidden">
        <button
          className="p-1  bg-green-500  shadow -lg text-white hover:text-white hover:bg-green-500 rounded"
          onClick={handleLogout}
        >
          logout
        </button>
      </div>
      <form
        encType="multipart/form-data"
        method="post"
        onSubmit={handleSubmit}
        class=" w-full flex flex-col items-center justify-between  "
      >
        <header className="uppercase  p-2 font-bold"> Add new resource</header>

        <div class="flex justify-center py-4 w-11/12">
          <div class="mb-3  w-full xl:w-96 ">
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
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        w-full
        px-2
        py-1.5
        m-0
        focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none
      "
              id="title"
              placeholder="e.g upper limb"
              name="title"
              required
              value={state.title}
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="flex justify-center w-11/12">
          <div class="mb-3 w-full xl:w-96">
            <input
              class="form-control
    block
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    w-full
    py-1.5
    px-1.5
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"
              type="file"
              name="file"
              id="file"
              required
              placeholder="add image"
              // multiple
              accept="image/*"
              value={state.file}
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="flex justify-center  py-4 w-11/12">
          <div class="mb-3 xl:w-96 w-full">
            <label
              for="exampleFormControlTextarea1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Comments
            </label>
            <textarea
              class="
        form-control
        block
        h-40
        px-2
        w-full
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="comment"
              placeholder="Your message"
              type="text"
              name="comment"
              required
              value={state.comment}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div class="flex justify-center w-11/12 ">
          <div class="mb-3 xl:w-96 w-full">
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
      w-full
      m-0
      focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
              aria-label="Default select example"
              onChange={handleChange}
              value={state.catergory}
              required
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

        <div class="mb-3 w-full  flex justify-center items-center">
          <button
            type="button"
            onClick={handleSubmit}
            class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Publish
          </button>
        </div>
      </form>
    </section>
  );
}

export default UploadMaterial;
