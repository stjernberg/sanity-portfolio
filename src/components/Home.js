import React from "react";
import styled from "styled-components/macro";

import { PageWrapper } from "../styling/GlobalStyling";
import BeachImg from '../assets/beach2.jpg'
import BackgroundImg from '../assets/background-1.jpg'
import ProfileImg from '../assets/profilepic.jpg'
export const Home = () => {

  return (
    <PageWrapper>
    <ImageWrapper>
      <MeContainer>
      <Heading>Hello, I'm Sara.</Heading>
      <Img src={ProfileImg} alt="photo of Sara"/>  
      </MeContainer>
    </ImageWrapper>
    </PageWrapper> 
  )
}

const MeContainer = styled.div`
  display: flex;
  width: 450px;
  height: 550px;
  background: #f5f5f5;
  border-radius: 10px;
  position: relative;
  border: 3px solid #fffaf0;
`

const Img = styled.img`
width: 210px;
  height: 210px;
  border-radius: 50%;
  border: 3px solid #d0d0d0;
  position: absolute;
  top: -10%;
  right: -10%;
`
const Heading = styled.h1`
  font-size: 30px;
  margin-top: 50px;
`
// const ImageWrapper = styled.div`
//   /* background-image: url(${BackgroundImg});
//   background-size: cover;
//   background-position: center; */
//   background: #b7c9e2;
//   width: 100%;
//   height: 100%;
//   margin-top: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
