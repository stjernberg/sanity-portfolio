import React from 'react'
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components/macro";

export const Header = () => {
  return (
    <Nav>
      <NameBox>
        <Name>Sara Stjernberg</Name>
        <Title>Frontend Developer</Title>
      </NameBox>
      <NavBar>
        <PageLink to="/" exact >
          <li>About me</li>
        </PageLink>
        {/* <PageLink to="/post">
          <li>Blog Posts</li>
        </PageLink> */}
        <PageLink to="/projects">
          <li>Projects</li>
        </PageLink>
        <IconContainer>
          <Icon
            url="https://www.linkedin.com/in/sara-stjernberg-12b929157/"
            fgColor="#fff"
            target="_blank"
            style={{ height: 35, width: 35 }} />
          <Icon
            url="https://github.com/stjernberg/"
            bgColor="#000"
            target="_blank"
            style={{ height: 35, width: 35 }} />
        </IconContainer>
      </NavBar>
    </Nav>
  )
}

const Icon = styled(SocialIcon)`
  margin: 5px;
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  /* justify-content: space-between; */
`



const Name = styled.h1`
  font-family: 'Amatic SC', cursive;
  color: #fff;
  font-size: 46px;
`
const Title = styled(Name)`
  font-size: 26px;
`
const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
`
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  /* background: #cd5c5c; */
  /* background: #0277bd; */
  background: rgb(185,217,235);
  background: radial-gradient(circle, rgba(185,217,235,1) 0%, rgba(102,153,204,1) 55%, rgba(102,187,204,1) 100%);
  color: #fff;
  align-items: center;
  height: 110px;
  margin: 0;
  padding: 30px;

`
const NavBar = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  /* z-index: 5; */

  li {
      margin: 20px;
    }
`
const activeClassName = "nav-item-active";
const PageLink = styled(NavLink).attrs({ activeClassName })`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  padding: 10px 0;

  &.${activeClassName} {
    color: #fff;
    font-weight: bold;
  }
  `