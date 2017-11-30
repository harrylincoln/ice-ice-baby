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
  }

  signIn(body) {
    return new Promise(resolve => {
      this.http.post('http://localhost:5000/api/signin', body).subscribe(data => {
        resolve(data);
      });
    });
  }

  // this.http.post('http://localhost:5000/api/signIn', body)
  //   .subscribe(
  //     response => {
  //       localStorage.setItem('id_token', response.json().id_token);
  //       this.router.navigate(['about']);
  //     },
  //     error => {
  //       alert(error.text());
  //       console.log(error.text());
  //     }
  //   );

  getPosts() {
    return new Promise(resolve => {
      this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
        resolve(data);
      });
    });
  }

}
