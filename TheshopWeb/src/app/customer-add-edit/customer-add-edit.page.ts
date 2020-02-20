import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CallapiService } from '../service/callapi.service';
import { AlertController } from '@ionic/angular';
import { customer } from '../models/customer';

@Component({
  selector: 'app-customer-add-edit',
  templateUrl: './customer-add-edit.page.html',
  styleUrls: ['./customer-add-edit.page.scss'],
})
export class CustomerAddEditPage implements OnInit {

  customerData:FormGroup
  submitRequested: boolean = false;
  getid:string;
  customer:customer;

  constructor(public actived:ActivatedRoute, public router:Router, public fb:FormBuilder, public callapi:CallapiService, public alertController: AlertController) {
    this.getid = this.actived.snapshot.paramMap.get('_id');
    this.callapi.getCustomerByid(this.getid).subscribe(it =>{
      this.customer = it;
      console.log(this.customer);
      if (it != null) {
        this.customerData.patchValue(it);
        console.log(this.customerData);
      }
    });
    console.log(this.getid);
    this.customerData = fb.group({
      'idCustomer':[null,Validators.required],
      'nameCustomer':[null,Validators.required],
      'telCustomer':[null,Validators.required],
      'addressCustomer':[null,Validators.required],
      'levelCustomer':[null,Validators.required],
    });
   }

   get f() { return this.customerData.controls; }

   public isValid(name: string): boolean {
    var ctrl = this.customerData.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'คำเตือน',
      message: 'คำเตือนมีรหัสลูกค้าซ้ำ',
      buttons: ['OK']
    });

    await alert.present();
  }

  addDataCustomer(){
    this.submitRequested = true;
    console.log(this.customerData.value);
    this.callapi.addCustomer(this.customerData.value).subscribe(it =>{
      console.log(it);
      if (it == null) {
        this.presentAlert();
      }else{
        this.router.navigate(['/customer-list']);
      }
    });
  }

  editDataCustomer(){
    this.submitRequested = true;
    console.log(this.customerData.value);
    this.callapi.editCustomer(this.customerData.value.idCustomer,this.customerData.value).subscribe(it =>{
      console.log(it);
      this.router.navigate(['/customer-list']);
    });
  }

  checkaction(){
    if (this.getid == null) {
        this.addDataCustomer();
    } else {
      this.editDataCustomer();
    }
  }

}
