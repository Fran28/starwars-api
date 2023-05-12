import React from 'react';
import { Link } from "react-router-dom";
import play from "@/assets/img/play.svg";

const Element = (props: any) => {
    return <li className='list-element'>
        <div className='description'>
          <p><b>Nombre:</b> {props.character.name}</p>
          <p><b>Año de Nacimiento:</b> {props.character.birth_year}</p>
          <p><b>Nº de Filmes:</b> {props.character.films.length }</p>
        </div>
        <Link to={`/${props.i + 1}`} className='link' title={'ver '+props.character.name}>
          <img src={play} alt={'ver '+props.character.name} />
        </Link>
    </li>
  } 

export default Element;