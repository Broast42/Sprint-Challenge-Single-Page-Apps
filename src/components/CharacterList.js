import React, { useEffect, useState } from "react";

import CharacterCard from "./CharacterCard";
import PageChanger from "./PageChanger";
import SearchForm from "./SearchForm";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FlexList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  text-align: center;
`;

const SearchBar = styled.div`
  text-align: center;
  background: rgb(153, 230, 255, 0.5);
  height: 32px;
  padding-top: 12px;
`;



export default function CharacterList() {
  
  const [ listData, setListData ] = useState([]);
  const [ current, setCurrent ] = useState(1);
  const [ pageCount, setPageCount ] = useState("");
  const [list, setList] = useState(false);
  
  
  useEffect(() => {

    let id = current;
    
    
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${id}`)
      .then(res => {
        setListData(res.data.results);
        setPageCount(res.data.info.pages);
        

      })
      .catch(error =>{
        console.log(error);
      })

    
    
  }, [current, list,]);

  // set an array of numbers for each page
  let arr = [];
  for(let i = 1; i <= pageCount; i++){
    arr.push(i);
  }

  const pageChangeHandel = x =>{
    setCurrent(x);
    setList(false);
  };

  const setter = x => {
    setList(x);
  };

  // set which list to map depending on if list is set or not
  let displayArr = [];
  if(list){
    displayArr = list;
  }else{
    displayArr = listData;
  }


  return (
    <section>
      <SearchBar>
        <SearchForm api={listData} result={setter}/>
      </SearchBar>
      
      <PageChanger arr={arr} current={current} fn={pageChangeHandel} pageCount={pageCount}/>
      
      <FlexList>
        
        {displayArr.map((x,i)=>(
          <Link to={`/character/${x.id}`} key={i}>
            <CharacterCard 
              image={x.image} 
              name={x.name} 
              species={x.species} 
              gender={x.gender} 
            />
          </Link>
          

        ))}
        
      </FlexList>

      <PageChanger arr={arr} current={current} fn={pageChangeHandel} pageCount={pageCount}/>
    

    </section>
    
  );
}
