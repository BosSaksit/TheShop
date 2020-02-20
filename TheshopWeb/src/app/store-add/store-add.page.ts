import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallapiService } from '../service/callapi.service';
import { product } from '../models/product';
import { store } from '../models/store';

@Component({
  selector: 'app-store-add',
  templateUrl: './store-add.page.html',
  styleUrls: ['./store-add.page.scss'],
})
export class StoreAddPage implements OnInit {

  dataProduct:product;
  productByid:product;
  idProduct:string;
  nameProduct:string;
  amonutProduct:string;
  dataStore:store;
  
  data = {
    "idStore":null,
    "idProduct":null,
    "nameProduct":null,
    "amountProduct":null,
    "totalProduct":null
  };

  constructor(public router:Router, public callapi:CallapiService) { }

  ngOnInit() {
    this.getProductAll();
  }

  addDataStore(){
    console.log(this.idProduct);
    this.data.nameProduct = this.productByid.nameProduct;
    this.data.totalProduct = this.productByid.totalProduct;
    console.log(this.data.nameProduct);
    console.log(this.amonutProduct);
    
    this.dataStore = this.data;
    console.log(this.dataStore);
    this.callapi.addStore(this.dataStore).subscribe(it =>{
      console.log(it);
        this.callapi.changeAddAmountProduct(this.dataStore.idProduct,this.dataStore.amountProduct).subscribe(it =>{
          console.log(it);
          this.dataStore.totalProduct = it.totalProduct;
          console.log(this.dataStore);   
      });
    });
    this.router.navigate(['/store-list']);
  }

  getProductByid(id){
    console.log(id.detail.value);
    this.callapi.getProductByid(id.detail.value).subscribe(it =>{
      console.log(it);
      this.productByid = it;
    });
    console.log(this.productByid);
    
  }

  getProductAll(){
    this.callapi.getAllProduct().subscribe(it =>{
      this.dataProduct = it;
      console.log(this.dataProduct);
    });
  }

}
