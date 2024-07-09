import { Component, inject, signal } from '@angular/core';
import {ProductComponent} from './../../components/product/product.component';
import {Product} from './../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartsideService } from '../../../shared/services/cartside.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal <Product[]>([]);
  private cartsideService = inject(CartsideService);

  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Prod 1',
        price: 10,
        image: 'https://picsum.photos/640/640?r=25',
        creationAt: new Date().toISOString()


      },
      {
        id: Date.now(),
        title: 'Prod 2',
        price: 10,
        image: 'https://picsum.photos/640/640?r=26',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Prod 3',
        price: 10,
        image: 'https://picsum.photos/640/640?r=27',
        creationAt: new Date().toISOString()


      },
      {
        id: Date.now(),
        title: 'Prod 4',
        price: 10,
        image: 'https://picsum.photos/640/640?r=28',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Prod 5',
        price: 10,
        image: 'https://picsum.photos/640/640?r=29',
        creationAt: new Date().toISOString()


      },
      {
        id: Date.now(),
        title: 'Prod 6',
        price: 10,
        image: 'https://picsum.photos/640/640?r=30',
        creationAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }





  addToCartMenu(product: Product){
    this.cart.update(previousState =>[...previousState, product]);


    
  }




  
}
