import { useEffect, useState } from 'react';
import TitleH2 from '@/components/titleH2'
import { getCharacterList } from '@/services/public.service';
import { useFetchAndLoad } from '@/hooks';
import GoldenButton from '@/components/goldenButton';
import List from '@/pages/characterList/components/CharacterList';

export const CharacterList = () => {
  const elementsToShow = 3;
  const [page, setPage] = useState(1);
  const [sourceCharacters, setSourceCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [lastDisplayed, setLastDisplayed] = useState(0);
  const { loading, callEndpoint } = useFetchAndLoad();

  async function queryData(){
    const response  = await callEndpoint(getCharacterList(page)).catch(e => console.log(e));
    if(response){
      const newData : any = [...sourceCharacters, ...response.data.results];
      setSourceCharacters(newData);
      setPage(page + 1)
    }
  }

  function getData(position = 0, elementsToShow = 0){
    const newList: any = [...characters, ...sourceCharacters.slice(position, position + elementsToShow)];
    setLastDisplayed(newList.length);
    setCharacters(newList);
  }

  function showMore(){
    if(lastDisplayed + elementsToShow > sourceCharacters.length){
      queryData();
    }else{
      getData(lastDisplayed, elementsToShow);
    }
  }

  useEffect(() => {
    if(sourceCharacters.length == 0){
      queryData();
    }
    if(lastDisplayed === 0){
      getData(0, 9);
    }else{
      showMore();
    }
  }, [sourceCharacters]);
  
  return (
    <>
    <TitleH2 title="Listado de Personajes" />
    <List characters={characters} loading={loading}/>
    <GoldenButton callback={showMore}>Ver Más...</GoldenButton>
    </>
  );
};

export default CharacterList;
