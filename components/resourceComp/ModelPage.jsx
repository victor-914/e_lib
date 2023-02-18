import React, { useEffect, useState } from "react";
import Loader from "../accessoryComponents/Loader";
import axios from "axios";
import Frame from "../accessoryComponents/Iframe";
function ModelPage({ queryObj }) {
  const [model, setModel] = useState();
  const [state, setState] = useState();

  useEffect(() => {
    (async () => {
      setState("loading");
      const response = await axios
        .get(`http://localhost:5000/api/model`)
        .then((response) => {
          let data = response.data;
          data = data.filter((item) => item.catergory === queryObj.catergory);
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
          <section className="bg-slate-100">
            <header className=" font-bold w-full text-center pt-6">
              {" "}
              {model?.title}
            </header>
            <main className="w-full h-screen">
              <Frame url={model?.url} width={"90%"} height={"90%"} />
            </main>
            <div></div>
          </section>
        </>
      ) : null}
    </>
  );
}

export default ModelPage;
