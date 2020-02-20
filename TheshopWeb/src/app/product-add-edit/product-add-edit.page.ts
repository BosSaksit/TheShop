import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { product } from '../models/product';
import { CallapiService } from '../service/callapi.service';
import { AlertController } from '@ionic/angular';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.page.html',
  styleUrls: ['./product-add-edit.page.scss'],
})
export class ProductAddEditPage implements OnInit {

  productData: FormGroup
  submitRequested: boolean = false;
  getid: string;
  product: product;
  getRead: any;
  mode: string;

  constructor(public router: Router, public activeted: ActivatedRoute, public fb: FormBuilder, public callapi: CallapiService, public alertController: AlertController) {
    this.mode = this.activeted.snapshot.paramMap.get('_mode');
    console.log(this.mode);   
    this.getid = this.activeted.snapshot.paramMap.get('_id');
    console.log(this.getid);
    this.getRead = this.activeted.snapshot.paramMap.get('isRead');
    console.log(this.getRead);
    
    this.callapi.getProductByid(this.getid).subscribe(it => {
      this.product = it;
      console.log(this.product);
      if (it != null) {
        this.productData.patchValue(it);
        console.log(this.productData);
      }
    });
    // console.log(this.getid);
    this.productData = fb.group({
      'idProduct': [null, Validators.required],
      'nameProduct': [null, Validators.required],
      'typeProduct': [null, Validators.required],
      'brandProduct': [null, Validators.required],
      'genProduct': [null, Validators.required],
      // 'totalProduct': [null, Validators.required],
      'detailProduct': [null, Validators.required],
      'costProduct': [null, Validators.required],
      'saleProduct': [null, Validators.required],
      'saleVIPProduct': [null],
      'saleVVIPProduct': [null],
      'saleVVVIPProduct': [null],
    });
  }

  get f() { return this.productData.controls;}

  public isValid(name: string): boolean {
    var ctrl = this.productData.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  ngOnInit() {
  }

  ngDoCheck(){
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'คำเตือน',
      message: 'คำเตือนมีรหัสสินค้าซ้ำ',
      buttons: ['OK']
    });

    await alert.present();
  }

  editDataProduct() {
    this.submitRequested = true;
    console.log(this.productData.value);
    this.callapi.editProduct(this.productData.value.idProduct, this.productData.value).subscribe(it => {
      console.log(it);
      this.router.navigate(['/product-list']);
    });
  }

  addDataProduct() {
    this.submitRequested = true;
    console.log(this.productData.value);
    this.callapi.addProduct(this.productData.value).subscribe(it => {
      console.log(it);
      if (it == null) {
        this.presentAlert();
      } else {
        this.router.navigate(['/product-list']);
      }
    });
  }

  checkaction() {
    //this.submitRequested = true;
    console.log(this.mode);
    switch (this.mode) {
      case "add":
        this.addDataProduct();
        console.log("add");
        break;
      case "edit":
        console.log("edit");
        this.editDataProduct();
        break;
      case "read":
        this.router.navigate(['/product-list']);
        break;
      default:
        alert("error condition");
        break;
    }
  }

}
