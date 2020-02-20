import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CallapiService } from '../service/callapi.service';
import { product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  productall:product;
  idproduct:string;
  productData:product[] = [];
  isRead:boolean = true;

  constructor(public menuCtrl:MenuController, public router:Router, public callapi:CallapiService) {
    this.getProductAll();
   }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getProductAll();
  }

  getProductAll(){
    this.callapi.getAllProduct().subscribe(it =>{
      this.productall = it;
      console.log(this.productall);
    });
  }

  delProduct(id){
    this.idproduct = id;
    console.log(this.idproduct);
    this.callapi.deleteProduct(this.idproduct).subscribe(it =>{
      this.getProductAll();
    });
  }

  todetail(id){
    this.router.navigate(['/product-add-edit', {isRead:this.isRead,_id:id,_mode:"read"}]);
  }

  toProductAddEdit(id){
    this.router.navigate(['/product-add-edit', {_id:id,_mode:"edit"}]);
  }

  gotoProductAddEdit(){
    this.router.navigate(['/product-add-edit', {_mode:"add"}]);
  }

  openmenu(){
    // this.menuCtrl.enable(true, 'content');
    this.menuCtrl.toggle();
    console.log("xxx");
  }

}
