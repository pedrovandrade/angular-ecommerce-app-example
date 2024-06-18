import { Component } from '@angular/core'
import { PageTemplateComponent } from '../../components/page-template/page-template.component'
import { ButtonModule } from 'primeng/button'
import { PanelModule } from 'primeng/panel'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PageTemplateComponent,
    ButtonModule,
    // PanelModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private router: Router,
  ) {}

  /**
   * Navigate to a given page through Angular's router library.
   * @param url The URL to navigate
   */
  public navigateTo(url: string) {
    this.router.navigate([url])
  }
}
