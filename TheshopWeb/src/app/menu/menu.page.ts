import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { CallapiService } from '../service/callapi.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  
  constructor(public callapi:CallapiService ,public router:Router, public menuCtrl:MenuController) { 
    // this.router.events.subscribe((event:RouterEvent) => {
    //   this.selectedPath = event.url;
    // });
  }

  ngOnInit() {
  
  }

  openmenu(){
    // this.menuCtrl.enable(true, 'first');
    
    console.log("xxx");
    
  }

 

}
