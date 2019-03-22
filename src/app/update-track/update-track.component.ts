import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MuzixHttpService } from '../muzix-http.service';

@Component({
  selector: 'app-update-track',
  templateUrl: './update-track.component.html',
  styleUrls: ['./update-track.component.css']
})
export class UpdateTrackComponent implements OnInit {
  public mbid1: string;
  public comments: string;

 constructor(private _route: ActivatedRoute, private router: Router, public muzixservice: MuzixHttpService) { }

 ngOnInit() {
  this.mbid1 = this._route.snapshot.paramMap.get('mbid');
 this.comments = this._route.snapshot.paramMap.get('comment');
 console.log('updatecomponent' + this.mbid1 + ' ' + this.comments);
// this.muzixservice.findTrack(this.mbid1).subscribe(
//   data => {
//     console.log(data);
   let updatedTrack = this.muzixservice.updateTrack(this.mbid1, this.comments).subscribe(
    data => {
      updatedTrack = data;
      console.log(updatedTrack);
    }
   );
   this.router.navigate(['/getTracks']);
  
   error => {
     console.log('some error occured in Update Track');
     console.log(error.errorMessage);
   }
 }
  }


