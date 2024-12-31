import { Component } from '@angular/core';
import { PlaceService } from './places.service';
import { Place } from './places.model';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrl: './places.component.css',
})
export class PlacesComponent {
  selectedPlace: string = '';
  description: string = '';

  constructor(private placeService: PlaceService) {}

  onChangeOption(value: string) {
    this.selectedPlace = value;
  }

  onAdd() {
    if (this.selectedPlace) {
      const newPlace: Place = {
        name: this.selectedPlace,
        description: this.description,
        img: `images/${this.selectedPlace}.jpg`,
      };
      this.placeService.setPlace(newPlace);
      this.selectedPlace = '';
      this.description = '';
    } else {
      alert('Please select a place');
    }
  }
}
