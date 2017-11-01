import { IGenre } from "./../../interfaces/IGenre";
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

  private _baseUrl: string = "https://api-2445582011268.apicast.io/";

  public getGenres(): Observable<IGenre[]> {
    const url = this._baseUrl + "?fields=id,name,slug&limit=30";
    return this._getData<IGenre[]>(url);
  }

  private _getData<T>(url: string): Observable<T> {
    return this.http
      .get(url, this._getHeaders())
      .map(res => res.json());     
  }

  private _post<T>(url: string, data: object): Observable<T> {
    return this.http
      .post(url, data, this._getHeaders())
      .map(res => res.json())
  }

  private _getHeaders(): RequestOptions {
    return new RequestOptions({
      headers: new Headers({
        "user-key": "529e4f693710d27f693ec4d0d59c230d"
      })
    });
  }
}
