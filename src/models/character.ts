import { FilmList } from "./filmList";

export interface Character{
    name: string,
    height: string, 
    birth_year: string, 
    gender: string, 
    films: FilmList
}