import { Component } from '@angular/core';
import { PageTemplateComponent } from '../../components/page-template/page-template.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    PageTemplateComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
