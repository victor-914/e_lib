import React from "react";
import styled from "styled-components";
import Frame from "../accessoryComponents/Iframe";
function ResourceLandingPage() {
  const url =
    "https://sketchfab.com/models/b018e3f215c14be6ab5c52e5371c3ba5/embed?ui_theme=dark";
  return (
    <StyledResourceLp>
      <div className="flex w-4/5 justify-center items-center  m-auto">
        <header className="text-lg font-bold">
          Superficial dissection of the face
        </header>
      </div>
      <Frame
        url={url}
        width={"80%"}
        height={"80%"}
        className="flex justify-center items-center"
      />
    </StyledResourceLp>
  );
}

export default ResourceLandingPage;

const StyledResourceLp = styled.section`
  width: 75%;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
