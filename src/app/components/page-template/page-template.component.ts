import { Component } from '@angular/core'
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-page-template',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
  ],
  templateUrl: './page-template.component.html',
  styleUrl: './page-template.component.scss'
})
export class PageTemplateComponent {

}
