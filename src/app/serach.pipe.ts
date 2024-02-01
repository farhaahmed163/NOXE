import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serach',
})
export class SerachPipe implements PipeTransform {
  transform(movies: any[], term: string): any[] {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(term.toLowerCase())
    );
  }
}
