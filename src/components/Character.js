import React, { useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const CharCard = styled.div`
    margin: 20px auto;
    background: rgb(153, 230, 255, 0.5);
    width: 80%;
    min-height: 800px;
    border: 4px solid #318131;
    border-radius: 20px;
    box-shadow: 2px 2px 3px black, -2px -2px 3px black;
    text-align: center; 
`;

const CharImg = styled.img`
  border: 4px solid #318131;
  box-shadow: 2px 2px 3px #99e6ff, -2px -2px 3px #99e6ff;
  border-radius: 50%;
  margin: 20px;
`;

const Panel = styled.div`
    background: rgb(49, 129, 49, 0.8);
    border: 2px solid #e0e006;
    border-radius: 20px;
    width: 50%;
    margin 0px auto;
    padding: 20px;
    
`;

export default function Character(props){

    const [ charData, setCharData ] = useState([]);
    const [ charLoc, setLocData ] = useState([]);
    const [ charOrigin, setCharOrigin ] = useState([]);

    useEffect(() => {

        let id = props.match.params.id;
        
        axios
          .get(`https://rickandmortyapi.com/api/character/${id}`)
          .then(res => {
            setCharData(res.data);
            setLocData(res.data.location);
            setCharOrigin(res.data.origin);
            
          })
          .catch(error =>{
            console.log(error);
        })

    },[props]);


    //split url string into an array to grab the last numbers for redirection to location page
    
    const urlNumbers = (url)=>{
        let a = [];
        let b ="";
        if(url){
            a = url.split("/");
            b = a[a.length -1];
            
        }else{
            b="";
        }
        return b;  
    };
    
    
    return(
        <CharCard>
            <CharImg src={charData.image} alt={charData.name} />
            <h2>{charData.name}</h2>
            <Panel>
                <p>Species: {charData.species}</p>
                <p>Gender: {charData.gender}</p>
                <p>Status: {charData.status}</p>
                <h3>Origin</h3>
                <Link to={`/location/${urlNumbers(charOrigin.url)}`}><h4>{charOrigin.name}</h4></Link>
                <h3>Location</h3>
                <Link to={`/location/${urlNumbers(charLoc.url)}`}><h4>{charLoc.name}</h4></Link>
            </Panel>
            
            
        </CharCard>
    );

}