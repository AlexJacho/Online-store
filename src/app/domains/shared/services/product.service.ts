import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient)

  getProducts(){
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  }

  constructor() { }
}
