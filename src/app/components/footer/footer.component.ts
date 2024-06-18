import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AvatarModule } from 'primeng/avatar'
import { BadgeModule } from 'primeng/badge'
import { ToolbarModule } from 'primeng/toolbar'
import { TooltipModule } from 'primeng/tooltip'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    ToolbarModule,
    AvatarModule,
    TooltipModule,
    BadgeModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  /**
   * Set of CSS classes (mostly Tailwind classes) for the container
   * `<div>` element of the footer navigation buttons.
   */
  public readonly navButtonCssClass = [
    'p-link',
    'inline-flex',
    'justify-content-center',
    'align-items-center',
    'text-gray-600',
    'text-base',
    'hover:bg-gray-200',
    'transition-all',
    'transition-duration-200',
  ].join(' ')

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
