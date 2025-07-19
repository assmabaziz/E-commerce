import { Component } from '@angular/core';

import { ProductCardComponent } from './product-card/product-card.component';
import { IBestSellerProduct } from '../../../Shared/Models/ibest-seller-product';

@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss'
})
export class BestSellerComponent {
readonly products : IBestSellerProduct[] = [
  {
    name:"Summer Wind T-shirt ",
    imageUrl:"assets/images/best-seller/summer-wind-tShirt.png",
    price:"31.99",
    oldPrice:"40.99"
  },
   {
    name:"Tailored Jacket",
    imageUrl:"assets/images/best-seller/tailored-jaket2.png",
    price:"38.99",
    oldPrice:"45.99"
  },
  {
    name:"Formal Classic suit",
    imageUrl:"assets/images/best-seller/formal-classic-suit.png",
    price:"50.00",
    oldPrice:"70.00"
  },
  {
    name:"White Solid Formal T-shirt",
    imageUrl:"assets/images/best-seller/white-solid-formal-tShirt.png",
    price:"42.09",
    oldPrice:"50.00"
  },
  {
    name:"Tailored Jacket",
    imageUrl:"assets/images/best-seller/Tailored-jacket.png",
    price:"41.03",
    oldPrice:"50.00"
  },
  {
    name:"Solid White Summer T-shirt",
    imageUrl:"assets/images/best-seller/solid-white-summer-tshirt.png",
    price:"29.99",
    oldPrice:"35.00"
  },
  {
    name:"Classic Top",
    imageUrl:"assets/images/best-seller/classic-top.png",
    price:"24.54",
    oldPrice:"30.00"
  },
  {
    name:"Formal Jeans",
    imageUrl:"assets/images/best-seller/formal-jeans.png",
    price:"38.99",
    oldPrice:"45.00"
  },
]
}
