import { IGenre } from "./../../interfaces/IGenre";
import { IGame } from "./../../interfaces/IGame";
import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  constructor(public http: Http) {}

  private _baseUrl: string = "http://localhost:3080";

  public getGenres(): Observable<IGenre[]> {
    const url = this._baseUrl + "/genres/?fields=id,name,slug&limit=30";
    return this._getData<IGenre[]>(url);
  }

  public getGamesByGenreId( genreId: number ): Observable<IGame[]> {
    const url = this._baseUrl + "/games/?fields=id,name,screenshots&limit=30&order=release_dates.date:desc&filter[genres][eq]="+genreId.toString();
    return this._getData<IGame[]>(url);
  }

  private _getData<T>(url: string): Observable<T> {
    return this.http.get(url, this._getHeaders()).map(res => res.json());
  }

  // private _post<T>(url: string, data: object): Observable<T> {
  //   return this.http.post(url, data, this._getHeaders()).map(res => res.json());
  // }

  private _getHeaders(): RequestOptions {
    return new RequestOptions({
      headers: new Headers({})
    });
  }
}
