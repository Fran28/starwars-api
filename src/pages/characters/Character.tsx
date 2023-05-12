import { useEffect, useState } from 'react';
import { getCharacter, getFilm } from '@/services/public.service';
import { useFetchAndLoad } from '@/hooks';
import { useParams } from 'react-router-dom';
import { getUrlLastPart } from '@/utilities';
import CharacterCard from './components/characterCard';


export const Character = () => {
  const { page } = useParams();
  const [character, setCharacter] = useState<any>();
  const [films, setFilms] = useState<any>([]);
  const { loading, callEndpoint } = useFetchAndLoad();
  
  async function queryFilms(){
    if(typeof character.films === 'undefined') return;
    const response = await character.films.map(async (film:string) => {
      return await callEndpoint(getFilm(getUrlLastPart(film))).catch(e => console.log(e));
    });
    if(response){
      Promise.all(response).then((films:any) => {
        const flimList = films.map((film:any) => {
          return film.data;
        });
        setFilms(flimList);
      });
    }
  }

  async function queryCharacterData(){
    const response  = await callEndpoint(getCharacter(Number(page))).catch(e => console.log(e));
    if(response){
      setCharacter(response.data);
    }
  }

  useEffect(() => {
    if(!character){
      queryCharacterData();
    }else{
      if(films.length === 0){
        queryFilms();
      }
    }
  }, [character, films]);

  return (
    <>
    <CharacterCard films={films} character={character} loading={loading} />
    </>
  );
};

export default Character;
