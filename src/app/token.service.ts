import {TokenData} from './tokendata';
import {UserData } from './userdata';
import {HttpParams} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class TokenService {

  constructor(private _http: HttpClient) {}

  getToken(userData: UserData) {
    const getTokenUrl = 'http://localhost:8080/oauth/token';

    const getTokenParams: HttpParams = new HttpParams()
     .append('grant_type', 'password')
     .append('username', userData.username)
     .append('password', userData.password);

    const getTokenHeaders: HttpHeaders = new HttpHeaders()
      .append('Authorization', 'Basic ' + btoa('client:secret'));

    return this._http.post<TokenData>(getTokenUrl, {
      withCredentials: true
    }, {
        headers: getTokenHeaders,
        params: getTokenParams
      });

  }

}
