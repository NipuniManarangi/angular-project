import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import {IProduct} from 'src/app/product/product/IProduct';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //properties: Array<IProduct>;
properties: [];
  constructor(private service:ProductService,private http:HttpClient) { }

  ngOnInit() {

    return this.http.get('http://localhost:50153/api/product/GetProducts').toPromise().then(
data => {
  console.log(data);
  this.properties = data['data'];
  // for(let id in data['data'])
  //   if(data.data.hasOwnProperty(id))
  //     this.properties.push(data.data[id]);
}

    );
    // this.service.getAllProducts().subscribe(
    //   (prodData) => this.properties = prodData
    //   // (res:any)=>{
    //   //   if(res.status==1){
    //   //     localStorage.setItem('products',res.data);


    //   //   }

    //   // }

    // );
    // localStorage.setItem('products',this.properties.toString());

  //  // this.service.isLoggedIn;
  //  this.service.getAllProducts().subscribe(
  //   data=>{
  //     this.properties=data;
  //     console.log(data);
  //   },error =>{
  //     console.log('httperror :');
  //     console.log(error);
  //   }




   //);





}
}
