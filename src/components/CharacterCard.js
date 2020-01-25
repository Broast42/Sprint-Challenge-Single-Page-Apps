import React from "react";


export default function CharacterCard(props) {
  console.log(props);
  const {image, name, species, gender, origin, location} = props.data;
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{species}, {gender}</p>
      <p>Origin: {origin.name}</p>
      <p>Location: {location.name}</p>
    </div>
  )
  }
