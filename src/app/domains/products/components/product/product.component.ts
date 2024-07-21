import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '@shared/pipes/reverse.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) prod!: Product;


  @Output () addToCart = new EventEmitter();

  addCartHandler(){
    console.log('click from child');
    this.addToCart.emit(this.prod);
  }

}
