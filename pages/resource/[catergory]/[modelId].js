import React, { useState, useEffect } from "react";
import ModelPage from "../../../components/resourceComp/ModelPage";
import { useRouter } from "next/router";
import useSWR from "swr";
function PerModel() {
  const [mounted, setMounted] = useState();
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data } = useSWR(
    mounted ? "http://localhost:5000/api/model" : null,
    fetcher
  );

  const router = useRouter();
  const queryObj = router.query;

  const [filteredData, setFilteredData] = useState();

  let { catergory, modelId } = queryObj;
  catergory = catergory?.toLowerCase();
  console.log(data, "AFAF");
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const filtered = data?.filter(
      (item) => item.catergory === queryObj.catergory
    );
    console.log(modelId, "MODELID", catergory, "DFJDJ");
    setFilteredData(filtered);
    console.log(filteredData, "filteredData");
  }, [data]);

  useEffect(() => {
    setMounted(true);
  }, []);

  console.log(queryObj.catergory, "queryObj");
  console.log(filteredData, "filtered");

  return <ModelPage queryObj={queryObj} />;
}

export default PerModel;
