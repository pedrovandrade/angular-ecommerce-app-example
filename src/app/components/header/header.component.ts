import { Component } from '@angular/core'
import { ToolbarModule } from 'primeng/toolbar'
import { AvatarModule } from 'primeng/avatar'
import { TooltipModule } from 'primeng/tooltip'
import { BadgeModule } from 'primeng/badge'
import { Router } from '@angular/router'
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ToolbarModule,
    AvatarModule,
    TooltipModule,
    BadgeModule,
    ButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  /**
   * Set of CSS classes (mostly Tailwind classes) for the container
   * `<div>` element of the header navigation buttons.
   */
  public readonly navButtonCssClass = [
    'p-link',
    'inline-flex',
    'justify-content-center',
    'align-items-center',
    'text-white',
    'h-3rem',
    'w-3rem',
    'rounded-full',
    'hover:bg-gray-400',
    'transition-all',
    'transition-duration-200',
  ].join(' ')

  public selectedItems = []

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
