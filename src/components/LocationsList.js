import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import PageChanger from "./PageChanger";

const SearchArea = styled.div`
  text-align: center;
  background: rgb(153, 230, 255, 0.5);
  height: 32px;
  padding-top: 12px;
`;

export default function LocationsList() {

    const [locations, setLocations] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageCount, setPageCount] = useState("");
    const [list, setList] = useState(false);

    useEffect(() =>{
        let id =current;
        axios
        .get(`https://rickandmortyapi.com/api/location/?page=${id}`)
        .then(res => {
            setLocations(res.data.results);
            setPageCount(res.data.info.pages);
            
        })
        .catch(error =>{
            console.log(error);
        })
        
    },[current, list])

    const pageChangeHandel = x =>{
        setCurrent(x);
        setList(false);
    };

    const setter = x => {
        setList(x);
    };

    // set an array of numbers for each page
    let arr = [];
    for(let i = 1; i <= pageCount; i++){
        arr.push(i);
    }

    // set which list to map depending on if list is set or not
    let displayArr = [];
    if(list){
        displayArr = list;
    }else{
        displayArr = locations;
    }

    return(
        <section>
            <SearchArea>
                <SearchForm api={locations} result={setter}/>
            </SearchArea>

            <PageChanger arr={arr} current={current} fn={pageChangeHandel} pageCount={pageCount}/>

            <div>
                {displayArr.map((x,i)=>(
                    <Link to={`/location/${x.id}`} key={i}>
                        <LocationCard
                            name={x.name}
                        />
                    </Link>
                ))}
            </div>

            <PageChanger arr={arr} current={current} fn={pageChangeHandel} pageCount={pageCount}/>

        </section>
        
    );
}
