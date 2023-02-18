import React, { useState } from "react";
import UploadMaterial from "./UploadMaterial";
import Footer from "../footer/Footer";
import styled from "styled-components";

function Profile() {
  const [state, setState] = useState("upload");
  return (
    <StyledProfile>
      <UploadMaterial />
      <Footer />
    </StyledProfile>
  );
}

const StyledProfile = styled.section``;
export default Profile;
