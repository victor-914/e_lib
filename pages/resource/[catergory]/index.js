import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import CatergoryPage from "../../../components/gallery/CatergoryPage";

function Catergory() {
  const URL = process.env.API_URL;

  const router = useRouter();
  let { catergory } = router.query;
  catergory = catergory?.toLowerCase();
  const [state, setState] = useState();
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    (async () => {
      try {
        setState("loading");
        const response = await axios.get(
          `https://human-anatomy-backend.onrender.com/api/file/${catergory}`
        );

        let data = response.data;
        setFilteredData(data);
        setState("success");
      } catch (e) {
        alert(e);
      }
    })();
  }, []);

  return <CatergoryPage filteredData={filteredData} state={state} />;
}

export default Catergory;
