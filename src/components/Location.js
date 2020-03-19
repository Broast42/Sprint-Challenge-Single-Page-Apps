import React, { useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const LocCard = styled.div`
    margin: 20px auto;
    background: rgb(49, 129, 49, 0.8);
    padding-top: 75px;
    width: 50%;
    min-height: 300px;
    border: 4px solid #e0e006;
    border-radius: 20px;
    box-shadow: 2px 2px 3px black, -2px -2px 3px black;
    text-align: center; 
`;



export default function Character(props){

    const [ locData, setLocData ] = useState([]);
    const [ resi, setResi ] = useState([]);

    useEffect(() => {

        let id = props.match.params.id;
        
        axios
          .get(`https://rickandmortyapi.com/api/location/${id}`)
          .then(res => {
            setLocData(res.data);
            setResi(res.data.residents);
            
            
          })
          .catch(error =>{
            console.log(error);
        })

    },[props]);


    
    
    
    return(
        
        <LocCard>
            <h2>{locData.name}</h2>
            <h3>Type: {locData.type}</h3>
            <h3>Dimension: {locData.dimension}</h3>
            <h3>Number of Residents: {resi.length}</h3>
        </LocCard>
            
        
    );

}