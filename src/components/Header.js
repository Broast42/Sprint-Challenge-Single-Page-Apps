import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

const StyHeader = styled.header`

  background: black;
  color: #99e6ff;
  padding-top: 5px;
  text-shadow: 1px 1px 2px black, 2px 2px 3px #e0e006;
`;

const StyImg = styled.img`
  width: 100%;
`;

const StyNav = styled.nav`
  border-bottom: 3px solid #99e6ff;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 40px;

  &:hover{
    border-bottom: 3px solid #e0e006;
  }
  
`;

const StyLink = styled.div`
  background: #318131;
  color: white;
  text-shadow: 0px 0px 3px black;
  border: 2px solid #e0e006;
  border-radius: 15px;
  padding: 3px 5px;
  min-width: 80px;
  text-align: center;

  &:hover{
    color: black;
    text-shadow: 0px 0px 3px white;
    background: #99e6ff;
    border-color: #318131;
  }
`;


export default function Header() {
  return (
    <StyHeader >
      <h1>Rick's -- Rick &amp; Morty Fan Page</h1>
      <StyImg src={morty} alt="Rick and Morty" />
      <StyNav>
        <StyLink><Link to="/">Home</Link></StyLink>
        <StyLink><Link to="/characters/">Characters</Link></StyLink>
        <StyLink><Link to="/locations/">Locations</Link></StyLink>

      </StyNav>
    </StyHeader>
  );
}
