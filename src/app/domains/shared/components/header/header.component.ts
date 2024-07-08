import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  @Input({required:true}) cartSide: Product[] = [];

  total = signal(0);

  toogleSideMenu(){
    this.hideSideMenu.update(previusState => !previusState);
  }

  calculateTotal(){
    return this.cartSide.reduce((total, productSide) => total + productSide.price, 0);
    
  }

  ngOnChanges(changes: SimpleChanges){
    const cartSide = changes['cartSide'];
    if (cartSide){
      this.total.set(this.calculateTotal());
    }
  }



}
