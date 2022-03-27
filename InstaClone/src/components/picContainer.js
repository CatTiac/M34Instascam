import React from "react";
import styled from "styled-components";

export const PicContainer = ({ photo }) => {
  return (
    <PicBox>
      <p>{photo.author}</p>
      <ImgContainer src={photo.download_url} alt="lorem picsum random pic" />
    </PicBox>
  );
};

const ImgContainer = styled.img`
  width: 30vh;
  border: solid 2px black;
  border-radius: 25px;
`;

const PicBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 25px;
  padding: 5px 5px;
`;
