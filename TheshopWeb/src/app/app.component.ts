import { Component } from '@angular/core';

import { Platform, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CallapiService } from './service/callapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  statusMenu:string = "0";
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public callapi:CallapiService,
    public navCtrl:NavController,
    public menuCtrl:MenuController
  ) {
    
  }

  ngOnInit() {
    console.log(this.statusMenu);
    this.callapi.showMenu = this.statusMenu;
 }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }); 
  }

  logout(){
    this.navCtrl.navigateRoot(['/login']);
    this.menuCtrl.close();
    this.callapi.showMenu = "0";
  }
}
