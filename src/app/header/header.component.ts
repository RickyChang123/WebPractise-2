import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isManuOpen = false;

  onToggleMenu() {
    this.isManuOpen = !this.isManuOpen;
  }

  onclick(event: Event) {
    if (event) {
      this.isManuOpen = false;
    }
  }
}
