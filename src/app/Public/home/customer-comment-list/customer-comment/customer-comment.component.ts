import { Component, Input } from '@angular/core';

import { ICustomerComment } from '../../../../Shared/Models/icustomer-comment';

@Component({
  selector: 'app-customer-comment',
  standalone: true,
  imports: [],
  templateUrl: './customer-comment.component.html',
  styleUrl: './customer-comment.component.scss'
})
export class CustomerCommentComponent {

  @Input({required: true}) comment !: ICustomerComment
  
}
