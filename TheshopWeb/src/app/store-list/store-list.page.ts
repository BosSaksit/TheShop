import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallapiService } from '../service/callapi.service';
import { store } from '../models/store';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.page.html',
  styleUrls: ['./store-list.page.scss'],
})
export class StoreListPage implements OnInit {

  dataAllstore:store;
  constructor(public router:Router, public callapi:CallapiService) { }

  ngOnInit() {
    this.getallStore();
  }

  ionViewDidEnter(){
    this.getallStore();
  }

  toStoreAdd(){
    this.router.navigate(['/store-add']);
  }

  getallStore(){
    this.callapi.getAllStore().subscribe(it =>{
      console.log(it);
      this.dataAllstore = it;
    });
  }


}
