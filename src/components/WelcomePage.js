import React, { useState, useEffect} from "react";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import axios from "axios";

const FlexDiv1 = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

export default function WelcomePage() {

  const [searchApi, setSearchApi] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(()=>{
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      setSearchApi(res.data.results);
      console.log("axios call wp: ", res.data.results );
    })
    .catch(error =>{
      console.log(error);
    })

  },[searchResult]);

  console.log(searchResult);

  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <FlexDiv1>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        
          <SearchForm api={searchApi} result={searchResult}/>
        
        </FlexDiv1>
        
        
      </header>
    </section>
  );
}
