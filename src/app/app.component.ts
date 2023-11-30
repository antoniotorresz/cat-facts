import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-first-client';
  mi_name = "antonio";
  http = inject(HttpClient);
  //this from the youtube channel:
  //products: Product[] = [];
  // change_title() {
  //   if (this.title == "angular-first-client" && this.mi_name == "antonio") {
  //     this.title = "changed";
  //     this.mi_name = "angular programmer";
  //   } else {
  //     this.title = "angular-first-client";
  //     this.mi_name = "antonio";
  //   }
  // }

  ngOnInit(){
    //this is the information from the youtube channel stream
    // this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    // .subscribe((data: any) => {
    //   this.products = data;
    // });
  }
}
