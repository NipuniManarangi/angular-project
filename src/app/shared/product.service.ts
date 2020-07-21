import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http';

import { Observable } from 'rxjs';
import { IProduct } from 'src/app/product/product/IProduct';
import {map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  readonly BaseURI = 'http://localhost:50153/api';
  // getAllProducts():Observable<IProduct[]>
  // getAllProducts():Observable<IProduct[]>
  // {


    // return this.http.get('http://localhost:50153/api/product/GetProducts').pipe(
    // map((resp:any) => resp.data));
    //this.BaseURI+'/product/GetProducts'
    // return this.http.get('http://localhost:50153/api/product/GetProducts').pipe(
    //   map(res => {
    //     const propertiesArray: Array<IProduct> = [];
    //     for(const id in res.data){

    //       propertiesArray.push(res['data']['id']);

    //   }
    //   return propertiesArray;
    //   }

    //   )
    // )
  //}
}
