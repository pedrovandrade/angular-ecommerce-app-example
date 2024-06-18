import { Component } from '@angular/core';
import { PageTemplateComponent } from '../../components/page-template/page-template.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    PageTemplateComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
