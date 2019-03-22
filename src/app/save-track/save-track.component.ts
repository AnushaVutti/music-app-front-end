import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MuzixHttpService } from '../muzix-http.service';

@Component({
  selector: 'app-save-track',
  templateUrl: './save-track.component.html',
  styleUrls: ['./save-track.component.css']
})
export class SaveTrackComponent implements OnInit {
  public artist: string;
  public mbid1: string;
  public track: string;
  public url: string;

  public trackinfo = {

    id : this.mbid1,
    name: this.track,
    comment : this.artist,
    imageUrl: this.url

  // tslint:disable-next-line:semicolon
  }
  constructor(private _route: ActivatedRoute, private router: Router, public muzixservice: MuzixHttpService) {
   }
  ngOnInit() {
    this.mbid1 = this._route.snapshot.paramMap.get('mbid');
    console.log('ID : ' + this.mbid1);
    this.muzixservice.findTrack(this.mbid1).subscribe(
      data => {
        console.log(data);
        this.trackinfo.name = data.track.name;
        this.trackinfo.comment = data.track.artist.name;
        this.trackinfo.id  = this.mbid1;
        this.trackinfo.imageUrl = data.track.album.image[3]['#text'];
        console.log('Image Url : ' + data.track.album.image[3]['#text']);
        this.muzixservice.saveTrack(this.trackinfo).subscribe(
         data1 => {
        console.log(data1);
        }
       );
       this.router.navigate(['/getTracks']);
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      }
    );
  }
}
