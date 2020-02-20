import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallapiService } from '../service/callapi.service';
import { customer } from '../models/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.page.html',
  styleUrls: ['./customer-list.page.scss'],
})
export class CustomerListPage implements OnInit {

  getallCustomer: customer[] = [];
  getallCustomer2:customer;
  idcustomer:string;

  constructor(public router: Router, public callapi: CallapiService) { 
    this.getAllCustomer();
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getAllCustomer();
  }

  toAddEditCustomer(id) {
    this.router.navigate(['/customer-add-edit', {_id:id}]);
  }

  getAllCustomer() {
    this.callapi.getAllCustomer().subscribe(it => {
      console.log(it);
      this.getallCustomer2 = it;
      // for (let index = 0; index < Object.keys(it).length; index++) {
      //   this.getallCustomer[index] = it[index];
      // }
    });
    console.log(this.getallCustomer2);

  }

  delCustomer(id) {
    this.idcustomer = id;
    console.log(this.idcustomer);
    this.callapi.deleteCustomer(this.idcustomer).subscribe(it => {
      this.getAllCustomer();
    });
    
  }

  // check(){
  //   var xx = this.getallCustomer.filter(it => it.idCustomer == "101101");
  //   console.log(xx);
  // }

}
