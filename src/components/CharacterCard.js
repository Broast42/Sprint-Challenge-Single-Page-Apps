import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 220px;
  height: 460px;
  margin 10px;
  background: #99ffff;
  border: 2px solid #008000;
  border-radius: 15px;
  box-shadow: 2px 3px 3px lightgray;
  padding: 5px;
`;

const StyImg = styled.img`
  width: 210px;
  border-radius: 50%;
  border: 2px solid white;
  
`;

const StyH2 = styled.h2`
  text-align: center;
`;



export default function CharacterCard(props) {
  console.log(props);
  const {image, name, species, gender, origin, location} = props.data;
  return (
    <Card>
      <StyImg src={image} alt={name} />
      <StyH2>{name}</StyH2>
      <p>{species}, {gender}</p>
      <p>Origin: {origin.name}</p>
      <p>Location: {location.name}</p>
    </Card>
  )
  }
