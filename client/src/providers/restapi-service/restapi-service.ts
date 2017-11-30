import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestapiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestapiServiceProvider {
  apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(public http: HttpClient) {
    console.log('Hello RestapiServiceProvider Provider');
    this.getPosts();
  }

  getPosts() {
    return new Promise(resolve => {
      this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
        resolve(data);
      });
    });
  }

}
