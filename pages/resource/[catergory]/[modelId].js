import React, { useState, useEffect } from "react";
import ModelPage from "../../../components/gallery/ModelPage";
import { useRouter } from "next/router";
// import useSWR from "swr";
function PerModel() {
  // const [mounted, setMounted] = useState();
  // const fetcher = (url) => axios.get(url).then((res) => res.data);
  // const { data } = useSWR(
  //   mounted ? "http://localhost:5000/api/model" : null,
  //   fetcher
  // );

  const router = useRouter();
  const queryObj = router.query;

  return <ModelPage queryObj={queryObj} />;
}

export default PerModel;
