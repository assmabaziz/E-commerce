import { Component, Input } from '@angular/core';

import { IBestSellerProduct } from '../../../../Shared/Models/ibest-seller-product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input ({required: true}) product !: IBestSellerProduct;
  isHovering: boolean = false;
  changeHoveringStatus(show: boolean): void {
    this.isHovering = show;
  }
}
