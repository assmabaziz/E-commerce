import { Component } from '@angular/core';
import { CustomerCommentComponent } from './customer-comment/customer-comment.component';
import { ICustomerComment } from '../../../Shared/Models/icustomer-comment';

@Component({
  selector: 'app-customer-comment-list',
  standalone: true,
  imports: [CustomerCommentComponent],
  templateUrl: './customer-comment-list.component.html',
  styleUrl: './customer-comment-list.component.scss',
})
export class CustomerCommentListComponent {

  readonly comments: ICustomerComment[] = [
    {
      title: 'Lakshay singh',
      text: 'The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth and the clothes I ordered fit prefectly. I’m beyond satified!',
      imgUrl:'assets/images/testimonials/model.jpeg',
      userRole:'Model',
      stars:5
    },
    {
      title: 'Aditya Chopra',
      text: 'I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended !',
      imgUrl:'assets/images/testimonials/lady_one.jpg',
      userRole:'CoFounder',
      stars :5
    },
    {
      title: 'Emily Wilson',
      text: 'I had a great experience shopping on this website. The clothes I brought are fashionable and comfortable. Highly satisfied!',
      imgUrl:'assets/images/testimonials/lady_three.jpg',
      userRole:'Fashion designer',
      stars:5
    },
  ];
}
