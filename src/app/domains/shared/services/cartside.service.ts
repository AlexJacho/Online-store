import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartsideService {
  
  cart = signal<Product[]>([]);

  


  constructor() { }
}
