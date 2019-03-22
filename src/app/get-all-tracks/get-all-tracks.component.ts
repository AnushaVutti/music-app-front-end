import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MuzixHttpService } from '../muzix-http.service';

@Component({
  selector: 'app-get-all-tracks',
  templateUrl: './get-all-tracks.component.html',
  styleUrls: ['./get-all-tracks.component.css']
})
export class GetAllTracksComponent implements OnInit {
  allTracks;
  constructor(public _route: ActivatedRoute, private router: Router, public muzixservice: MuzixHttpService) { }

  ngOnInit() {
    this.allTracks = this.muzixservice.getAllTracks().subscribe(
      data => {
        this.allTracks = data;
  },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      // tslint:disable-next-line:semicolon
      }
    );
    }
}
