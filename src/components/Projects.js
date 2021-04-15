import React, { useState, useEffect } from 'react';
import styled from "styled-components/macro";
import { ChevronsRight } from "react-feather";
import sanityClient from "../client.js";
import { PageWrapper } from "../styling/GlobalStyling";

export const Projects = () => {

  const [projectData, setProjectData] = useState(null);

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
      }`).then((data) => setProjectData(data))
      .catch(console.error);

  })
  return (
    <PageWrapper>
      <Heading>Featured projects</Heading>
      <ProjectsWrapper>
        {projectData && projectData.map((project, index) => (
          <Project key={index}>
            <ProjectLink href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer" >
              <Title>{project.title}</Title>  
              <Img
                src={project.mainImage.asset.url}
                alt={project.mainImage.alt} /> 
                <Description>{project.description}</Description> 
                
                {/* <ChevronsRight color="#858181" size="22" /> */}
              
              <Tags>
                {project.tags.map((tag, index) => (
                  // <Tag key={index}>{(index ? "  | " : " ") + tag}</Tag>
                   <Tag key={index}>{tag}</Tag>

                ))}
              </Tags>             
            </ProjectLink>
          </Project>
        ))}
      
      </ProjectsWrapper>
    </PageWrapper>
  );
};

const Span = styled.span`
  margin-left: 350px;
`
const Description= styled.p`
  margin-top: 10px;
`
const Heading = styled.h1`
  font-weight: bold;
  margin-top: 30px;
  font-size: 40px;
  font-family: 'Squada One', cursive;
`
const Tag = styled.p`
  font-weight: bold;
  background: #cedee7;
  padding: 3px;
  border-radius: 3px;
  margin-right: 10px;
`
const Tags = styled.div`
  display: flex;
  margin-top: 15px; 
  justify-content: center;  
`
const ProjectLink = styled.a`
  text-decoration: none;
  color: #000;
`
const Title = styled.h2`
   position: absolute;
   color: grey;
   text-shadow: 3px 3px #51484f;
    top: 30%;
    left: 30%;
    font-size: 30px;
    font-weight: bold;  
    font-family: 'RocknRoll One', sans-serif;
`

const Project = styled.article`
  margin: 50px;
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
  /* margin-top: 15px; */
`
const Img = styled.img`
  /* width: 510px;*/
  height: 250px; 
  width: 100%;
  &:hover{
  -webkit-filter: brightness(.5);
   filter: brightness(.5);
  }   
`