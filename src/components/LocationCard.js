import React from "react";
import styled from "styled-components";

const LocCard = styled.div`
  height: 30px;
  width: 90%;
  margin 20px auto;
  padding-top: 10px;
  border 2px solid rgb(153, 230, 255, 1);
  border-radius: 25px;
  box-shadow 1px 2px 3px black;
  background: rgb(224, 224, 6, 0.7 );
  text-align: center 

  &:hover{
    background: rgb(224, 224, 6, 1 );
  }
`;

export default function LocationCard(props) {
  
  return (
    <LocCard>
      {props.name}
    </LocCard>
  );
}
