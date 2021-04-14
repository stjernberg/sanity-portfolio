import React, { useState, useEffect } from 'react';
import styled from "styled-components/macro";
import sanityClient from "../client.js";
import { PageWrapper } from "../styling/GlobalStyling";

export const Projects = () => {

  const [projectData, setprojectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            date,
            description,
            projectType,
            link,
            tags,
            mainImage{
              asset->{
                  _id,
                  url
              },
              alt
          }
      }`).then((data) => setprojectData(data))
      .catch(console.error);

  })
  return (
    <PageWrapper>
      <Heading>My projects</Heading>
      <ProjectsWrapper>
        
        {projectData && projectData.map((project, index) => (
          <Project key={index}>
            <ProjectLink href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer" >
              <Title>{project.title}</Title>  
              <Img
                src={project.mainImage.asset.url}
                alt={project.mainImage.alt} />
              <p>{project.description}</p>
              
              <Tags>
                {project.tags.map((tag, index) => (
                  <Tag key={index}>{(index ? "  | " : " ") + tag}</Tag>
                ))}
              </Tags>
              
            </ProjectLink>
            {/* // <span>
      //   <p>Finished on</p>:{" "}
      //   {new Date(project.date).toLocaleString()}
      // </span> */}
          </Project>
        ))}
      
      </ProjectsWrapper>
    </PageWrapper>
  );
};


const Heading = styled.h1`
  font-weight: bold;
  margin-top: 15px;
`
const Tag = styled.p`
  font-weight: bold;
`
const Tags = styled.div`
  display: flex;
  margin-top: 15px; 
  justify-content: center;
  
`
// const ImageContainer = styled.div`
//    height: 250px; 
//   width: 100%;
// `

const ProjectLink = styled.a`
  text-decoration: none;
  color: #000;
`

const Title = styled.h2`
   position: absolute;
   color: grey;
    top: 30%;
    left: 30%;
    font-size: 25px;
    font-weight: bold;  
    font-family: 'RocknRoll One', sans-serif;
`

const Project = styled.article`
  margin: 70px;
  background: #f5f5f5;
  padding: 15px;
  width: 450px;
  height: 430px;
  position: relative;
  box-shadow: 0 10px 10px #707070;
  transition: box-shadow 0.5s ease;
  &:hover{
    box-shadow: 5px 10px 10px  #707070;
    }
`

const ProjectsWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 30px;
`
const Img = styled.img`
  /* width: 510px;*/
  height: 250px; 
  width: 100%;
  
   
`