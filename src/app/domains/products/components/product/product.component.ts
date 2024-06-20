import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) img: string = '';
  @Input({required:true}) price: number = 0;
  @Input({required:true}) title: string = '';
  @Input({required:true}) creationAt: string = '';

  @Output () addToCart = new EventEmitter();

  addCartHandler(){
    console.log('click from child');
    this.addToCart.emit('its a message from child ' + this.title);
  }

}
