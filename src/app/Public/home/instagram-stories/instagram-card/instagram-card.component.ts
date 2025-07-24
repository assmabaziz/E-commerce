import { Component, Input } from '@angular/core';
import { IStory } from '../../../../Shared/Models/istory';

@Component({
  selector: 'app-instagram-card',
  standalone: true,
  imports: [],
  templateUrl: './instagram-card.component.html',
  styleUrl: './instagram-card.component.scss'
})
export class InstagramCardComponent {
  @Input({required: true}) story !: IStory 
shown: boolean = false;

showLayer(show:boolean) :void {
  this.shown = show
}
}
