import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { RestapiServiceProvider } from '../providers/restapi-service/restapi-service';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  users: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, geolocation: Geolocation, restapiService: RestapiServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // restapiService.getPosts()
      // .then(data => {
      //   this.users = data;
      //   console.log('this.users', this.users);
      // });
      
      // geolocation.getCurrentPosition().then((resp) => {
      //  console.log('resp.coords.latitude', resp.coords.latitude);
      //  console.log('resp.coords.longitude', resp.coords.longitude);
      // }).catch((error) => {
      //   console.log('Error getting location', error);
      // });

    });
  }
}
