import { Genre } from "./genre.model";
import { Language } from "./language.model";


export interface Movie {
    movieId?: number;
        title: string;
        synopsis: string;
        genre: Genre;
        image: string;
        releaseDate: number;
        time: string;
        language: Language;
        active: boolean;
}