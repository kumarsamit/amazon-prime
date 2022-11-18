import { Component, OnInit } from '@angular/core';
import { HttpsService } from 'src/app/services/https/https.service';
import {POPULAR,NOW_PLAYING} from 'src/environments/api.paths'



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  movieList:any=''
  nowPlaying:any=''

  constructor(private movie : HttpsService) { 

 
  }

  getMovie(){
    this.movie.getData3(POPULAR).subscribe((resp)=>{
      this.movieList = resp;
      console.log('this.movieList', this.movieList)
    })
  }
  getMovie1(){
    this.movie.getData4(NOW_PLAYING).subscribe((resp)=>{
      this.nowPlaying = resp;
      console.log('this.nowPlaying', this.nowPlaying)
    })
  }

  ngOnInit(): void {
    this.getMovie();
    this.getMovie1();

  }

}

