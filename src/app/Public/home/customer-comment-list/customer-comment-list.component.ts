import { Component } from '@angular/core';
import { CustomerCommentComponent } from './customer-comment/customer-comment.component';

@Component({
  selector: 'app-customer-comment-list',
  standalone: true,
  imports: [CustomerCommentComponent],
  templateUrl: './customer-comment-list.component.html',
  styleUrl: './customer-comment-list.component.scss'
})
export class CustomerCommentListComponent {

}
