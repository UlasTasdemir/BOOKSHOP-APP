import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() id: number = 0;
  @Input() isbn_13: string = "";
  @Input() publicId: string = "";
  @Input() author: string = "";
  @Input() price: number = 0;
  @Input() title: string = "";
  @Input() subTitle?: string = "";
}
