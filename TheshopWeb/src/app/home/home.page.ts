import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CallapiService } from '../service/callapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  menu = [
    { title:'ข้อมูลลูกค้า' , url: '/customer-list' ,icon: '../assets/icon/customer.png'},
    { title:'ข้อมูลสินค้า' , url: '/product-list' ,icon: '../assets/icon/list.png'},
    { title:'คลังสินค้า' , url: '/store-list' ,icon: '../assets/icon/shop.png'},
  ];

  num:number = 0;
 
  constructor(public actived:ActivatedRoute,public menuCtrl:MenuController,public callapi:CallapiService) {
   
  }
  add(){
    this.num +=1;
  }

  minus(){
    if (this.num == 0 && this.num <=0) {
      this.num = 0;
    }
    this.num -=1;
  }

  openFirst() {
    this.menuCtrl.open();
  }

  ngOnInit() {
    this.callapi.showMenu = "1";
    console.log(this.callapi.showMenu);
    console.log(this.menu);
       
  }

}
