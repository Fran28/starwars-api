import TitleH2 from '@/components/titleH2';
import React from 'react';
import Films from '../filmsList';
import ReturnButton from '@/components/returnButton';
import Loading from '@/components/loading';

const CharacterCard = (props: any) => {
    return <div>
    {props.loading || !props.character ? <Loading/> : 
    <>
    <TitleH2 title={"Personaje : "+props.character.name} />
    <div className='character-container'>
     <p>- Altura: {props.character.height}</p>
     <p>- Año de Nacimiento: {props.character.birth_year}</p>
     <p>- Genero: {props.character.gender }</p>
     <p>- Filmes:</p>
     <Films films={props.films} />
     <ReturnButton/>
   </div>
   </>}
  </div>
 }

 
export default CharacterCard;