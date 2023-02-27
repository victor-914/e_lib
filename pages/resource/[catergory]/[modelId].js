import React, { useState, useEffect } from "react";
import ModelPage from "../../../components/gallery/ModelPage";
import { useRouter } from "next/router";

function PerModel() {
  const router = useRouter();
  const queryObj = router.query;

  return <ModelPage queryObj={queryObj} />;
}

export default PerModel;
