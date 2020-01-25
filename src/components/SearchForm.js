import React, { useState } from "react";

export default function SearchForm(props) {

  const [search, setSearch]= useState("");

  const changeHandle = e => {
    setSearch(e.target.value);
  };

  const submitHandle = e => {
    e.preventDefault();
    let arr = props.api.filter(x => x.name.includes(search));
    props.result(arr);
    console.log("arr", arr);
  };
 
  return (
    <section className="search-form">
     <form onSubmit={submitHandle}>
       <div>
         <label htmlFor="search">Search a Character</label> 
       </div>
       <input onChange={changeHandle} id="name" type="text" name="search" value={search} />
       <button type="submit">Search</button>
     </form>
    </section>
  );
}
