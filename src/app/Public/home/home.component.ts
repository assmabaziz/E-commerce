import { Component } from '@angular/core';

import { BannerComponent } from "./banner/banner.component";
import { BestSellerComponent } from "./best-seller/best-seller.component";
import { ShopByCategoriesComponent } from "./shop-by-categories/shop-by-categories.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, BestSellerComponent, ShopByCategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
