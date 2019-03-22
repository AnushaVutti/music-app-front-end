import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/operator/do';
@Injectable({
  providedIn: 'root'
})
export class MuzixHttpService {
  public alltracks;
  public baseUrl = 'http://ws.audioscrobbler.com/2.0';
  public apiKey = 'b65fc892d6ea91ae93cdd689ec56ec5f';
  public baseUrlMongo = 'http://localhost:8080/muzix/v1/';
  constructor(private _http: HttpClient) {
    console.log('http service got called');
  }
  public searchtrack(trackname): any {
    this.alltracks = this._http.get(this.baseUrl + '/?method=track.search&track=' + trackname + '&api_key=' +
    this.apiKey + '&format=json');
    console.log(this.alltracks);
    return this.alltracks;

  }
  public getAllTracks(): any {
    const getTracks = this._http.get(this.baseUrlMongo + 'tracks');
    return getTracks;

  }
  public deleteTrack(trackId): any {
    console.log(trackId);
    const deletedTrack = this._http.delete(this.baseUrlMongo + 'track/' + trackId);
    return deletedTrack;

  }
  public saveTrack(trackinfo): any {
    console.log('HERE IN SAVE TRACK : ' + trackinfo);
    const postTrack = this._http.post(this.baseUrlMongo + 'track', trackinfo);
    console.log(trackinfo);
    return postTrack;
  }
  public updateTrack(trackId, comment): any {
    const updatedTrack = this._http.put(this.baseUrlMongo + 'track/' + trackId + '/' + comment, 0);
    console.log(trackId);
    return updatedTrack;
  }
  public findTrack(mid): any {
    const trackinfo = this._http.get(this.baseUrl + '/?method=track.getInfo&api_key=' + this.apiKey + '&mbid='
    + mid + '&format=json');
    return trackinfo;
     }
}
