import React, { useEffect, useState } from "react";
import Loader from "../accessoryComponents/Loader";
import axios from "axios";
import Image from "next/image";
function ModelPage({ queryObj }) {
  const [model, setModel] = useState();
  const [state, setState] = useState();

  useEffect(() => {
    (async () => {
      setState("loading");
      const response = await axios
        .get(`http://localhost:5000/api/file/${queryObj.catergory}`)
        .then((response) => {
          let data = response.data;
          data = data.filter((item) => item._id === queryObj.modelId);
          data = data[0];
          setModel(data);
          setState("success");
        });
    })();
  }, []);

  return (
    <>
      {state === "loading" ? (
        <Loader />
      ) : model?.url ? (
        <>
          <section className="bg-slate-100 w-4/5 m-auto">
            <header className="font-bold w-full text-center pt-6">
              {" "}
              {model?.title}
            </header>
            <main className="w-full h-screen relative">
              <Image
                src={model?.url}
                width={"90%"}
                height={"90%"}
                layout="fill"
              />
            </main>
            <div className="w-4/5 m-auto p-6 mt-4 mb-6 bg-slate-100">
              {model.comment}
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}

export default ModelPage;
