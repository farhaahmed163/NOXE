import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient: HttpClient) { }

  geyMovieDetails(id: string, mediaType: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=c95de11ec012ef476f2014e59179dcd9&language=en-US`)

  }
  getTrending(mediaType: string): Observable<any> {
    return this._HttpClient.get(` https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=c95de11ec012ef476f2014e59179dcd9`)

  }
  getSimilar(id: string, mediaType: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=c95de11ec012ef476f2014e59179dcd9&language=en-US&page=1`)

  }
}
