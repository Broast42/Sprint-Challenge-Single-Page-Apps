import React, { useState } from "react";
import styled from "styled-components";


const Sbutton= styled.button`
  background: rgb(153, 230, 255, 1);
  width 90px;
  margin 0px 5px;
  border-radius: 5px; 
`;


export default function SearchForm(props) {

  const [search, setSearch]= useState("");

  const changeHandle = e => {
    setSearch(e.target.value);
  };

  const submitHandle = e => {
    e.preventDefault();
    let arr = props.api.filter(x => x.name.includes(search));
    props.result(arr);

    setSearch("");
  };
 
  return (
    <div>
     <form onSubmit={submitHandle}>
       
      <label htmlFor="search">Search this page </label> 
       
      <input onChange={changeHandle} id="search" type="text" name="search" value={search} />
      <Sbutton type="submit">Search</Sbutton>

     </form>
    </div>

  );
}
