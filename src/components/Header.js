import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyHeader = styled.header`
  background: #008000;
  color: #99ffff;
  text-shadow: 1px 2px 3px black;
  height: 130px;
  padding 10px;
`;

const StyNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
`;

export default function Header() {
  return (
    <StyHeader className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <StyNav>
        <Link to={"/"}><h3>Home</h3></Link>
        <Link to={"/characters/"}><h3>Characters</h3></Link>
      </StyNav>
    </StyHeader>
  );
}
