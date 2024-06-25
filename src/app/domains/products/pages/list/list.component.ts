import { Component, signal } from '@angular/core';
import {ProductComponent} from './../../components/product/product.component';
import {Product} from './../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal <Product[]>([]);

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
      }
    ];
    this.products.set(initProducts);
  }





  fromChild(event: string){
    console.log('click from father');
    console.log(event);
    
  }




  
}
