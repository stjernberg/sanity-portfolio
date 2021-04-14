import React from "react";
import styled from "styled-components/macro";
// import sanityClient from "../client.js";
// import imageUrlBuilder from "@sanity/image-url";

import { PageWrapper } from "../styling/GlobalStyling";
// import BeachImg from '../assets/beach2.jpg'
// import BackgroundImg from '../assets/background-1.jpg'
import ProfileImg from '../assets/profilepic.jpg'

// const builder = imageUrlBuilder(sanityClient);
// const urlFor = source => {
//   return builder.image(source);
// }

export const Home = () => {

  // const [author, setAuthor] = useState(null);

  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `*[_type == "author"]{
  //         name,
  //         bio,
  //         "authorImage": image.asset->url
  //     }`
  //     )
  //     .then((data) => setAuthor(data[0]))
  //     .catch(console.error);
  // }, []);

  // if (!author) return <div>Loading...</div>;
  return (
    
    <PageWrapper>
      {/* <ImageWrapper> */}
      <MeContainer>
        <Heading>Hello, I'm Sara.</Heading>
        <Img src= {ProfileImg} />
        {/* <Img src={urlFor(author.authorImage).url()} alt="photo of Sara" /> */}
        <About>
        Hello! I'm a Frontend developer with a background in education. Working with digital tools has been
            a passion in my teaching. That has led med into the path of coding. I love the creativity and logic in
            coding and building websites. My goal is to build great user experiences,
            that are accessible and easy to understand.
          </About>
        {/* <About>{author.bio}</About> */}
      </MeContainer>
      {/* </ImageWrapper> */}
    </PageWrapper>
  )
}

const About = styled.div`
  margin-top: 110px;
  width: 80%;
`
const MeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  width: 550px;
  height: 550px;
  background: #f5f5f5;
  border-radius: 10px;
  position: relative;
  border: 3px solid #fffaf0;
  margin-top: 150px;
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
  margin-top: 80px;
  width: 100%;
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
