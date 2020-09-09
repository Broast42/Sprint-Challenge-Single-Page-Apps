import React from "react";
import styled from "styled-components";


const ListCard = styled.div`
  width: 400px;
  height: 150px;
  margin 5px 0px;
  background: rgb(153, 230, 255, 0.7);
  border: 4px solid #e0e006;
  border-radius: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  &:hover{
    background: rgb(153, 230, 255, 1);
  }
  
`;

const ListImg =styled.img`
  width: 130px;
  height: 130px;
  border: 4px solid #318131;
  box-shadow: 2px 2px 3px #e0e006, -2px -2px 3px #e0e006;
  border-radius: 50%; 
`;

const ListProps = styled.div`
  width: 240px;
`;

const Cta = styled.div`
  font-style: italic;
`;

export default function CharacterCard(props) {
  return (
    <ListCard>
      <ListImg src={props.image} alt={props.name} />
      <ListProps>
        <h3>{props.name}</h3>
        <p>{props.species}: {props.gender}</p>
        <Cta>click for more info</Cta>
      </ListProps>
    </ListCard>
  );
}

