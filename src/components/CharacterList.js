import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        setApiData(res.data.results);
        console.log("axios call: ", res.data.results );
      })
      .catch(error =>{
        console.log(error);
      })
  }, []);

  return (
    <section className="character-list">

      {apiData.map((x,i)=>(
        <div key={i}>
          <CharacterCard data= {x}/>
        </div>
        
      ))}
       
    </section>
  );
}
