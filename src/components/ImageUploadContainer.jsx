import React, { useState } from "react";
import styled from "styled-components";
import ImageCrop from "./ImageCrop";
import ImageDropZone from "./ImageDropZone";

const ImageUploadContainer = () => {
  const [ image, setImage ] = useState('');

  const onChangeImage = (uploadedImage) => {
    setImage(URL.createObjectURL(uploadedImage));
  }
  console.log("image ::::", image);

  return (
    <StImageUploadContainer>
      {
        image ? (
          <ImageCrop image = {image} />
        ) : (
          <ImageDropZone onChangeImage={onChangeImage} />
        )
      }
    </StImageUploadContainer>
  );
}

export default ImageUploadContainer;
const StImageUploadContainer=styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
`;