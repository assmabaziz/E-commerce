import { Component } from '@angular/core';
import { InstagramCardComponent } from './instagram-card/instagram-card.component';
import { IStory } from '../../../Shared/Models/istory';

@Component({
  selector: 'app-instagram-stories',
  standalone: true,
  imports: [InstagramCardComponent],
  templateUrl: './instagram-stories.component.html',
  styleUrl: './instagram-stories.component.scss'
})
export class InstagramStoriesComponent {

  listStories : IStory[] = [
    {
      imgUrl:'assets/images/instagram_stories/story0.jpeg'
    },
    {
      imgUrl:'assets/images/instagram_stories/story2.jpeg'
    },
    {
      imgUrl:'assets/images/instagram_stories/story3.jpeg'
    },
    {
      imgUrl:'assets/images/instagram_stories/story4.jpeg'
    }
  ]
}
