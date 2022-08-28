import React from "react";
import MainContainer from "../components/MainContainer";
import styled from "styled-components";

const MainPage = () => {
  return (
    <StMainPageWrap>
      <MainContainer />
    </StMainPageWrap>
  );
}

export default MainPage;

const StMainPageWrap = styled.div`
  width: 100%;
  height: 100vh;
`;