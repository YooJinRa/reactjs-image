import React, { useState } from "react";
import Potal from "./global/Potal";
import Modal from "./global/Modal";
import styled from "styled-components";

const MainContainer = ({ props }) => {
  const [ modalOn, setModalOn ] = useState(false);
  const handleModal = () => {
    setModalOn(!modalOn);
  }
  return (
    <StMainContainerWrap>
      <button onClick={handleModal}>모달 오픈!</button>
      <Potal>
        {modalOn && <Modal onClose={handleModal} /> }
      </Potal>
    </StMainContainerWrap>
  );
}

export default MainContainer;

const StMainContainerWrap = styled.div`
 
`;