import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MuzixHttpService } from '../muzix-http.service';

@Component({
  selector: 'app-last-fm',
  templateUrl: './last-fm.component.html',
  styleUrls: ['./last-fm.component.css']
})
export class LastFmComponent implements OnInit {

  public alltracks;
  constructor(public _route: ActivatedRoute, private router: Router, public muzixservice: MuzixHttpService) { }
  ngOnInit() {
    const trackName = this._route.snapshot.paramMap.get('trackName');
    console.log(trackName);
    this.alltracks = this.muzixservice.searchtrack(trackName).subscribe(
      data => {
        this.alltracks = data;
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      }


    );
  }

}
