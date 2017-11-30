import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: HttpClient, public restapiService: RestapiServiceProvider) {

  }

  login(event, username, password) {
    event.preventDefault();

    this.restapiService.signIn({ username, password }).then((resp) => {
      console.log('restapiService.signIn', resp);
    });

  }

}
