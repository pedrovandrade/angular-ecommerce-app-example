import { Component } from '@angular/core';
import { PageTemplateComponent } from '../../components/page-template/page-template.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    PageTemplateComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
