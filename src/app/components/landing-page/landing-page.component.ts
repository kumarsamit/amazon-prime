import { Component, OnInit } from '@angular/core';
import { HttpsService } from 'src/app/services/https/https.service';
import {POPULAR} from 'src/environments/api.paths'



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  movieList:any=''

  constructor(private movie : HttpsService) { 

 
  }

  getMovie(){
    this.movie.getData(POPULAR).subscribe((resp)=>{
      this.movieList = resp;
      console.log('this.movieList', this.movieList)
    })
  }


  ngOnInit(): void {
    this.getMovie();
  }

}

