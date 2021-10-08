import { Genre } from "./genre.model";
import { Language2 } from "./language2.model";

export interface Movie {
    movieId: number;
        title: string;
        synopsis: string;
        genre: Genre;
        image: string;
        releaseDate: number;
        time: string;
        language: Language2;
        active: boolean;
}