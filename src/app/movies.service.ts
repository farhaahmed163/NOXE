import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient: HttpClient) { }
  getTrending(mediaType: string): Observable<any> {
    return this._HttpClient.get(` https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=c95de11ec012ef476f2014e59179dcd9`)

  }
}
