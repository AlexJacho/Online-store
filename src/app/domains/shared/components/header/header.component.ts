import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { CartsideService } from '@shared/services/cartside.service';
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  private cartsideService = inject(CartsideService)
 
  total = this.cartsideService.total;
  cart = this.cartsideService.cart;
  

  toogleSideMenu(){
    this.hideSideMenu.update(previusState => !previusState);
  }



}
