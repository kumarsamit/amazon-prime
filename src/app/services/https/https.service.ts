import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpsService {


 

  constructor(private http:HttpClient,private router:ActivatedRoute) {

  }
  getData3(url: any) {
	url = environment.base_api_url_3 + url + environment.api_key_3
	return this.http.get(url);
  }
  getData4(url: any) {
	url = environment.base_api_url_4 + url + environment.api_key_3
	return this.http.get(url);
  }
}
