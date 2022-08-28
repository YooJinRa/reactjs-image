import React, { useCallback } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { FaSpinner } from "react-icons/fa";

const ImageDropZone = ({ onChangeImage }) => {

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    onChangeImage(acceptedFiles[0]);
  }, [onChangeImage]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <StImageDropZone {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <FaSpinner />
      ) : (
        <p>이미지를 드래그하거나 클릭하여 첨부해주세요.</p>
      )}
    </StImageDropZone>
  );
}

export default ImageDropZone;
const StImageDropZone=styled.div`
  width: 100%;
  height: 100%;
  background-color: skyblue;
`;