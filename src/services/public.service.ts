import { Character, CharacterList, Film } from '@/models';
import { loadAbort } from '@/utilities';
import axios from 'axios';

export const getCharacterList = (page = 1) => {
  const controller = loadAbort();
  return {
    call: axios.get<CharacterList>('https://swapi.dev/api/people/?page='+page, { signal: controller.signal }),
    controller
  };
};

export const getCharacter = (id = 1) => {
  const controller = loadAbort();
  return {
    call: axios.get<Character>('https://swapi.dev/api/people/'+id, { signal: controller.signal }),
    controller
  };
};

export const getFilm = (id = 1) => {
  const controller = loadAbort();
  return {
    call: axios.get<Film>('https://swapi.dev/api/films/'+id, { signal: controller.signal }),
    controller
  };
};