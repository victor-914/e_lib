import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import CatergoryPage from "../../../components/resourceComp/CatergoryPage";

function Catergory() {
  const router = useRouter();
  let { catergory } = router.query;
  catergory = catergory?.toLowerCase();
  const [state, setState] = useState();
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    (async () => {
      try {
        setState("loading");
        const response = await axios.get(`http://localhost:5000/api/model`);
        let data = await response.data;
        const filtered = data?.filter((item) => item.catergory === catergory);
        setFilteredData(filtered);
        localStorage.setItem("modelData", JSON.stringify(filteredData));
        setState("success");
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return <CatergoryPage filteredData={filteredData} state={state} />;
}

export default Catergory;
