import React from "react";
import PerModel from "./PerModel";
import { useRouter } from "next/router";
import Loader from "../accessoryComponents/Loader";
import NotFound from "../accessoryComponents/NotFound";

function CatergoryPage({ filteredData, state }) {
  const router = useRouter();
  const url = router.query;

  return (
    <>
      {state === "loading" ? (
        <Loader />
      ) : state === "empty" ? (
        <NotFound />
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
