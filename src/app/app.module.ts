import { MuzixHttpService } from './muzix-http.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LastFmComponent } from './last-fm/last-fm.component';
import { SearchTrackComponent } from './search-track/search-track.component';
import { SaveTrackComponent } from './save-track/save-track.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GetAllTracksComponent } from './get-all-tracks/get-all-tracks.component';
import { UpdateTrackComponent } from './update-track/update-track.component';
import { DeleteTrackComponent } from './delete-track/delete-track.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RecommendationsComponent } from './recommendations/recommendations.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LastFmComponent,
    SearchTrackComponent,
    SaveTrackComponent,
    GetAllTracksComponent,
    UpdateTrackComponent,
    DeleteTrackComponent,
    RecommendationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: 'search', component: SearchTrackComponent},
      {path: 'searchtrack/:trackName', component: LastFmComponent},
      {path: 'savetrack/:mbid', component: SaveTrackComponent},
      {path: 'getTracks', component: GetAllTracksComponent},
      {path: 'deleteTrack/:mbid', component: DeleteTrackComponent},
      {path: 'updateTrack/:mbid/:comment', component: UpdateTrackComponent},
      {path: 'home', component: HomeComponent}
    ])
  ],
  providers: [MuzixHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
