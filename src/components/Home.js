import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
// import sanityCpent from "../cpent.js";
// import imageUrlBuilder from "@sanity/image-url";

import { PageWrapper } from "../styling/GlobalStyling";
// import BeachImg from '../assets/beach2.jpg'
// import BackgroundImg from '../assets/background-1.jpg'
import ProfileImg from '../assets/profilepic.jpg'

// const builder = imageUrlBuilder(sanityCpent);
// const urlFor = source => {
//   return builder.image(source);
// }

export const Home = () => {

  // const [author, setAuthor] = useState(null);

  // useEffect(() => {
  //   sanityCpent
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

      <MeContainer>

        <Heading>Hello, I'm Sara.</Heading>
        <Img src={ProfileImg} />
        {/* <Img src={urlFor(author.authorImage).url()} alt="photo of Sara" /> */}
        <AboutWrapper>
          <About>
            <p>I'm a Frontend developer with a background in education. Working with digital tools has been
            a passion in my teaching. That has led med into the path of coding. I love the creativity and logic in
            coding and building websites. My goal is to build great user experiences,
            that are accessible and easy to understand.</p>
            <br />
            <p>In February I graduted from. A 24-week fast-paced remote bootcamp focused on JavaScript (ES6), React, HTML5, CSS and server-side programming with Node.js. With weekly projects covering everything from the basics of programming to structuring web projects in the latest technologies. We worked with Agile methodology with weekly sprints planning, check-ins, demos and retrospectives.
          Mob-programming and pair-programming was a significant part of the education.</p>
            <br />
            <p>I'm currently learning Wordpress and the headless CMS Sanity. This portfolio site is built with Sanity and React.</p>
          </About>

          <SkillsWrapper>
            <Skills>Skills</Skills>

            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Styled Components</p>

            <p>React</p>
            <p>Redux</p>
            <p>Node.js</p>
            <p>MongoDB</p>
            <Skills>Learning</Skills>
            <p>Sanity</p>
            <p>Wordpress</p>

            <p><CheckIt>Check out my portfolio here </CheckIt> 
            <PageLink to="/projects">
              <Span role="img" aria-label="right pointer">👉</Span>
            </PageLink>
            </p>


          </SkillsWrapper>

          {/* <About>{author.bio}</About> */}
        </AboutWrapper>
      </MeContainer>
    </PageWrapper>
  )
}

const Span = styled.span`
  font-size: 30px;
`
const PageLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
`

const CheckIt = styled.p`
  font-style: italic;
  margin-top: 80px;
  display: flex;
`
const AboutWrapper = styled.article`
  display: flex;
  justify-content: space-between;
`

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
 
  p{
    font-weight: bold;
  }
`
const Skills = styled.h2`
  margin-top: 30px;
`
const About = styled.div`
  margin-top: 110px;
  width: 60%;
`
const MeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 780px;
  height: auto;
  background: #f5f5f5;
  border-radius: 10px;
  position: relative;
  border: 3px sopd #fffaf0;
  margin-top: 100px;
  margin-bottom: 100px;
 `

const Img = styled.img`
width: 210px;
  height: 210px;
  border-radius: 50%;
  border: 3px sopd #d0d0d0;
  position: absolute;
  top: -5%;
  right: 10%;
`
const Heading = styled.h1`
  font-size: 30px;
  margin-top: 80px;
  width: 100%;
`
