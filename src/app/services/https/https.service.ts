import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpsService {

	base_api_url = 'https://api.themoviedb.org/3';
	base_poster_url = 'https://image.tmdb.org/t/p/w500';
	api_key = '&api_key=ddf611caad1fe1aab5910321c0cfa7ba';
 

  constructor(private http:HttpClient,private router:ActivatedRoute) {

  }
  getData(url: any) {
	url = environment.base_api_url + url + environment.api_key + '&page=2'
	return this.http.get(url);
  }
}
