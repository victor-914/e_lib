import React from "react";
import PerModel from "./PerModel";
import { useRouter } from "next/router";
import Loader from "../accessoryComponents/Loader";

function CatergoryPage({ filteredData, state }) {
  const router = useRouter();
  const url = router.query;
  console.log(url, "url");
  return (
    <>
      {state === "loading" ? (
        <Loader />
      ) : (
        <>
          <header className="w-full p-6 text-center">
            {url.catergory?.toLocaleUpperCase()}
          </header>
          <main className="w-full h-auto  flex flex-wrap justify-evenly">
            {filteredData?.map((item) => (
              <PerModel item={item} key={item._id} />
            ))}
          </main>
        </>
      )}
    </>
  );
}

export default CatergoryPage;
