import styled from "styled-components";

const StyledLoginHomePage = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;

  .loginHomeContainer {
    width: 50%;
    height: 80vh;
    position: relative;
  }

  .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 20;
  }

  .login {
    width: 50vw;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form {
    width: 50%;
    height: 100%;
  }

  .card {
    width: 75%;
    height: 95%;
    border-radius: 8px;
  }
`;

export default StyledLoginHomePage;
