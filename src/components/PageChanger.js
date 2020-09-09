import React from "react";
import styled from "styled-components";

const PageNumbers = styled.span`
  color: white;
  cursor: pointer;
  text-align: center;
  padding: 0px 2px;

  &:hover{
    color: black;
  }
`;

const ActivePageNumbers = styled.span`
  color: black;
  cursor: pointer;
  text-align: center;
  padding: 0px 2px;
  border-bottom: 1px solid black;

  &:hover{
    color: white;
  }
`;

const PageChange = styled.div`
  text-align: center;
  margin: 10px;
`;

const Lbutton = styled.button`
  background: rgb(153, 230, 255, 1);
  width 90px;
  margin 0px 5px;
  border-radius: 5px;
`;

export default function PageChanger(props){

    let next = "";
    let prev = "";

    if(props.current === props.pageCount){
        next = 1;
      }else{
        next = props.current +1;
    };

    if(props.current === 1){
        prev = props.pageCount;
      }else{
        prev = props.current -1;
      };

    return(
        <PageChange>
            <Lbutton onClick={()=>props.fn(prev)}>{"<-- Previous"}</Lbutton>
            
            {props.arr.map((x,i)=>(
            x === props.current ? 
            <ActivePageNumbers key={i} onClick={()=>props.fn(x)}>{x}</ActivePageNumbers> :
            <PageNumbers key={i} onClick={()=>props.fn(x)}>{x} </PageNumbers>
            ))}
            
            <Lbutton onClick={()=>props.fn(next)}>{"Next -->"}</Lbutton>
      </PageChange>
    );
};