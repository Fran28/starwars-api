import React from 'react';
import {Film as FilmModel} from "@/models";

const Films = (props: any) => {
    const filmList = props.films.map((film : FilmModel, i:number) =>{
      return <li key={i}>{i+1}.- {film.title} </li>;
    });
    return <ul className='film-list'>{filmList}</ul>
}

export default Films;