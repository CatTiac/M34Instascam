// import React from 'react';
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { removeUser } from "../utils";
import { PicContainer } from "./picContainer";
import { PageContainer } from "../globalStyles";
import { Navbar } from "./navbar";
import { StyledButton } from "./login";

//Below - square brackets in useState for array
export const Home = ({ user, setUser }) => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch("https://picsum.photos/v2/list");
      if(response.status !== 200) {
        throw new Error("No pics, soz m8!");
      }
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.log(error);
    }
  };

  //Loads response immediately on load, [] dependency to update
  useEffect(() => {
    fetchPhotos();
  }, []);

  const removeHandler = (user) => {
    removeUser(setUser);
    console.log(`deleted ${user}`);
  };

  return (
    <PageContainer>
      {!user && <Navigate to="/" />}
      <Navbar setUser={setUser} />
      <button onClick={fetchPhotos}>Grab photos</button>
      <PicPage>
        {photos.map((photo, index) => (
          <PicContainer photo={photo} key={index} />
        ))}
      </PicPage>
      <StyledButton onClick={ () => removeHandler(user) }>Remove user</StyledButton>
    </PageContainer>
  );
};

const PicPage = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
