import React, { useState, useEffect} from "react";
import styled from "styled-components";

import axios from "axios";
// import { Link } from "react-router-dom";

const WelcomeCard = styled.div`
  margin: 0px auto;
  background: rgb(224, 224, 6, 0.5 );
  width: 80%;
  min-height: 800px;
  border: 4px solid #99e6ff;
  border-radius: 20px;
  box-shadow: 2px 2px 3px black, -2px -2px 3px black;
  text-align: center; 
`;

const MainImg = styled.img`
  border: 4px solid #318131;
  box-shadow: 2px 2px 3px #99e6ff, -2px -2px 3px #99e6ff;
  border-radius: 50%;
`;

const DataDiv = styled.div`
  margin: 0px auto;
  margin-bottom: 40px;
  width: 75%;
  min-height: 400px;
  background: rgb(49, 129, 49, 0.5);
  border: 4px solid #99e6ff;
  border-radius: 20px;
  box-shadow: 2px 2px 3px black, -2px -2px 3px black;
`;

const DataNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 35px;
  background: #e0e006;
  border-radius: 16px 16px 0px 0px;
`;

const NavButton = styled.button`
  padding: 0px 5px;
  min-width: 70px;
  border: none;
  font-size: 1rem;
  background: none;
  

  &:hover{
    border-top: 2px solid #318131;
    border-bottom: 2px solid #318131;
    cursor: pointer;
  }
`;

const LinkFlex = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
`;

const QuickItem = styled.div`
    width: 120px;
    height: 60px;
    padding: 5px;
    margin: 5px;
    background: #e0e006;
    border: 2px solid #318131;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
      background: #99e6ff;
      cursor: pointer;
    }
`;

const Qbutton = styled.button`
    background: #99e6ff;
    margin: 5px;
    width: 100px;
    cursor: pointer;
    border-radius: 5px;
`;


export default function WelcomePage() {

  const [apiData, setApiData] = useState([]);
  const [ path, setPath] = useState(`https://rickandmortyapi.com/api/character/`);
  const [ next, setNext] = useState("");
  const [ prev, setPrev] = useState("");
  const [ label, setLabel ] = useState("");

  useEffect(()=>{
    axios
      .get(path)
      .then(res => {
        setApiData(res.data.results);
        setNext(res.data.info.next);
        setPrev(res.data.info.prev);
        
      })
      .catch(error =>{
        
      })
    
    if(path.includes("https://rickandmortyapi.com/api/character/")){
      setLabel("Characters");
    }else if(path.includes("https://rickandmortyapi.com/api/location/")){
      setLabel("Locations");
    }else{
      setLabel("Episodes");
    }
  
  },[path]);

  const pathSetter = x => {
    setPath(x);
  }

  
  

  return (
    <section>
      <WelcomeCard>
        <h1>Welcome to the most rickdiculous fan site!</h1>
        <MainImg
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <h2>A source for Rick and Morty type stuff</h2>
        
        
        <h3>Quick Links</h3>
        <DataDiv>
            <DataNav>
              <NavButton onClick={()=> pathSetter("https://rickandmortyapi.com/api/character/")}>Characters</NavButton>
              <NavButton onClick={()=> pathSetter("https://rickandmortyapi.com/api/location/")}>Locations</NavButton>
              <NavButton onClick={()=> pathSetter("https://rickandmortyapi.com/api/episode/")}>Episodes</NavButton>
            </DataNav>
            
            <h2>{label}</h2>
            
            {prev !== "" ? <Qbutton onClick={()=> pathSetter(prev)}>{"<-- Previous"}</Qbutton> : "" }
            {next !== "" ? <Qbutton onClick={()=> pathSetter(next)}>{"Next -->"}</Qbutton> : ""}

            <LinkFlex>
               {apiData.map((x,i)=>(
                  <div key={i}>
                    <QuickItem>{x.name}</QuickItem>
                  </div>
          
                ))}
            </LinkFlex>

          </DataDiv>
      </WelcomeCard>

    </section>
  );
}
