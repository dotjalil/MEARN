import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  images: string[] = [
    'assets/images/slide-1.jpg',
    'assets/images/slide-2.jpg',
    'assets/images/slide-3.jpg',
  ];
  currentImageIndex: number = 0;
  currentImageSrc: string = 'assets/images/slide-1.jpg';
  nextImage(): void {
    if (this.currentImageIndex === this.images.length - 1) {
      this.currentImageIndex = 0;
    } else {
      this.currentImageIndex++;
    }
    this.currentImageSrc = this.images[this.currentImageIndex];
  }

  prevImage(): void {
    if (this.currentImageIndex === 0) {
      this.currentImageIndex = this.images.length - 1;
    } else {
      this.currentImageIndex--;
    }
    this.currentImageSrc = this.images[this.currentImageIndex];
  }
}
