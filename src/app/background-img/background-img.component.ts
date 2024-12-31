import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-background-img',
  templateUrl: './background-img.component.html',
  styleUrl: './background-img.component.css',
})
export class BackgroundImgComponent implements OnInit {
  backgroundImg: string = '';
  constructor(private router: Router) {}

  private destroy = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = this.router.events.subscribe(() => {
      const url = this.router.url;
      if (url === '/') {
        this.backgroundImg = 'images/majestic-mountains.jpg';
      } else if (url === '/about') {
        this.backgroundImg = 'images/japanese-temple.jpg';
      } else if (url === '/user') {
        this.backgroundImg = 'images/parisian-streets.jpg';
      }

      this.destroy.onDestroy(subscription.unsubscribe);
    });
  }
}
