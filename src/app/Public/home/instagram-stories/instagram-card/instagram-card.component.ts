import { Component } from '@angular/core';

@Component({
  selector: 'app-instagram-card',
  standalone: true,
  imports: [],
  templateUrl: './instagram-card.component.html',
  styleUrl: './instagram-card.component.scss'
})
export class InstagramCardComponent {
shown: boolean = false;

showLayer(show:boolean) :void {
  this.shown = show
}
}
