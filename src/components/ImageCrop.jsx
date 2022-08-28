import React, { useState } from "react";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import styled from "styled-components";

const ImageCrop = ({ image }) => {

  const [ crop, setCrop ] = useState({
    aspect: 1280 / 300,
    x: 0,
    y: 0,
    width: 504,
    height: 118,
    unit: "px",
  });
  const [ completedCrop, setCompletedCrop ] = useState({
    aspect: 1280 / 300,
    x: 0,
    y: 0,
    width: 504,
    height: 118,
    unit: "px",
  });

  return (
    <StImageCrop>
      <ReactCrop 
        crop={crop}
        onChange={(crop) => setCrop(crop)}
        onComplete={(crop) => setCompletedCrop(crop)}
      >
        <img src={image} />
      </ReactCrop>

      <button 
        //onClick={onChangeCoverImage}
      >저장하기</button>
      <canvas 
        // ref={canvasRef}
      ></canvas>
    </StImageCrop>
  );
}

export default ImageCrop;
const StImageCrop=styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;
`;