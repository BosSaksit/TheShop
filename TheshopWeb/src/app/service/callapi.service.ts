import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { customer } from '../models/customer';
import { product } from '../models/product';
import { store } from '../models/store';

@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  public showMenu:string = "0";
  public static host: string = "https://localhost:5001/api/";

  constructor(public http:HttpClient) { }

  public getAllCustomer(){
    return this.http.get<customer>(CallapiService.host + 'Customer/GetAllCustomer');
  }

  public getCustomerByid(id:string){
    return this.http.get<customer>(CallapiService.host + 'Customer/GetCustomerByid/' + id);
  }

  public addCustomer(data){
    return this.http.post<customer>(CallapiService.host + 'Customer/AddCustomerData' ,data);
  }

  public deleteCustomer(id:string){
    return this.http.delete<customer>(CallapiService.host + 'Customer/DeleteCustomer/' + id);
  }

  public editCustomer(id:string,data){
    return this.http.put<customer>(CallapiService.host + 'Customer/EditCustomerData/' + id , data);
  }

  public getAllProduct(){
    return this.http.get<product>(CallapiService.host + 'Product/GetAllProduct');
  }

  public getProductByid(id:string){
    return this.http.get<product>(CallapiService.host + 'Product/GetProductByid/' + id);
  }

  public addProduct(data){
    return this.http.post<product>(CallapiService.host + 'Product/AddProductData' , data);
  }

  public editProduct(id:string,data){
    return this.http.put<product>(CallapiService.host + 'Product/EditProductData/' + id, data);
  }

  public deleteProduct(id:string){
    return this.http.delete<product>(CallapiService.host + 'Product/DeleteProduct/' + id);
  }

  public changeAddAmountProduct(id:string,amount:string){
    return this.http.get<product>(CallapiService.host + 'Product/ChangeAddAmountProduct/'+id+'/'+amount);
  }

  public changeCencelAmountProduct(id:string,amount:string){
    return this.http.get<product>(CallapiService.host + 'Product/ChangeCencelAmountProduct/'+id+'/'+amount);
  }

  public getAllStore(){
    return this.http.get<store>(CallapiService.host + 'Store/GetAllStore');
  }

  public getStoreByidProduct(id:string){
    return this.http.get<store>(CallapiService.host + 'Store/GetStoreByidProduct/' + id);
  }

  public getStoreByidStore(id:string){
    return this.http.get<store>(CallapiService.host + 'Store/GetStoreByidStore/' + id);
  }

  public addStore(data){
    return this.http.post<store>(CallapiService.host + 'Store/AddStoreData' ,data);
  }

  public deletedStore(id:string){
    return this.http.delete<store>(CallapiService.host + 'Store/DeleteStore/' + id);
  }
}
