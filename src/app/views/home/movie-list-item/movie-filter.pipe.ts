import { Pipe, PipeTransform } from "@angular/core";
import { Movie } from "src/app/models/movie.model";

@Pipe({ name: 'movieFilter' })
export class MovieFilterPipe implements PipeTransform {
    transform(movie: Movie[], search: string): Movie[] {
        if(!movie || !search) {
            return movie;
        }
        return movie.filter(movie => 
            movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    }
}