import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { BestSellerComponent } from "./best-seller/best-seller.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, BestSellerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
