import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styles: `
      .menu_item {
        @apply text-gray-300 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white;
      }

      .active {
        @apply bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-900;
      }

      .menu_item_mobile {
        @apply text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium;
      }

      .active_mobile {
        @apply bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-900;
      }
    `,
    imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive]
})
export class AppComponent {
  public title: string = 'Testing Angular 17 with Standalone Components';
}
