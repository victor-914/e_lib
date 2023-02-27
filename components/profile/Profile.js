import React from "react";
import UploadMaterial from "./UploadMaterial";
import Footer from "../footer/Footer";
import styled from "styled-components";

function Profile() {
  return (
    <StyledProfile>
      <UploadMaterial />
      <Footer />
    </StyledProfile>
  );
}

const StyledProfile = styled.section``;
export default Profile;
