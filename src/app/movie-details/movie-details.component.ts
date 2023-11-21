import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  item: any;
  similarMovies: any[] = [];
  mediaType: string = ''
  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) { }
  ngOnInit(): void {
    let { id, media_type } = this._ActivatedRoute.snapshot.params
    this.mediaType = media_type
    this._MoviesService.geyMovieDetails(id, media_type).subscribe({
      next: (data) => this.item = data
    })
    this._MoviesService.getSimilar(id, media_type).subscribe({
      next: (data) => this.similarMovies = data.results.filter((item: any) => item.poster_path != null)
    })
  }
  getSimilar(id: string, media_type: string) {
    this._MoviesService.geyMovieDetails(id, media_type).subscribe({
      next: (data) => this.item = data
    })
    this._MoviesService.getSimilar(id, media_type).subscribe({
      next: (data) => this.similarMovies = data.results.filter((item: any) => item.poster_path != null)
    })
  }
}
