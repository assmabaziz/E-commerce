import { Component } from '@angular/core';

import { CategoryCardComponent } from "./category-card/category-card.component";
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-shop-by-categories',
  standalone: true,
  imports: [CategoryCardComponent, MatIconModule],
  templateUrl: './shop-by-categories.component.html',
  styleUrl: './shop-by-categories.component.scss'
})
export class ShopByCategoriesComponent {
readonly categoriesList :Array<{name: string, imgUrl: string}> = [
    {
      name:'Casual wear',
      imgUrl:'assets/images/categories/casual-wear.png'
    },
    {
      name:'Western wear',
      imgUrl:'assets/images/categories/Western-wear.png'
    },
    {
      name:'Ethnic wear',
      imgUrl:'assets/images/categories/Ethnic-wear.png'
    },{
      name:'Kids wear',
      imgUrl:'assets/images/categories/kids-wear.png'
    }
  ]
}
