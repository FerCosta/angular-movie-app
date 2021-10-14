import { Language } from "./language.model";

export interface Genre {
    genreId?: number;
    name: string;
    language: Language;
    active: boolean;
}