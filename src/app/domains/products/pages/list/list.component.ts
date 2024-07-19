import { Component, inject, signal } from '@angular/core';
import {ProductComponent} from '@products/components/product/product.component';
import {Product} from '@shared/models/product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartsideService } from '@shared/services/cartside.service';
import { ProductService } from '@shared/services/product.service';

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

  private productService = inject(ProductService)

  addToCartMenu(product: Product){
    this.cartsideService.addToCart(product);
  }

  ngOnInit(){
    this.productService.getProducts()
    .subscribe({
      next:(products) => {
        this.products.set(products);
      },
      error:() => {

      }
    })
  }




  
}
