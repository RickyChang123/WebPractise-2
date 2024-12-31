import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Place } from '../places.model';
import { PlaceService } from '../places.service';

@Component({
  selector: 'app-place-item',
  templateUrl: './place-item.component.html',
  styleUrl: './place-item.component.css',
})
export class PlaceItemComponent implements OnInit, OnChanges {
  @Input({ required: true }) selectPlace!: string;
  filterPlaces: Place[] = [];
  places: Place[] = [];

  constructor(private placeService: PlaceService) {}

  ngOnInit() {
    this.placeService.currentPlace.subscribe((place) => {
      this.places = place;
      this.onfilterPlaces();
    });
  }

  ngOnChanges(): void {
    this.onfilterPlaces();
  }

  onfilterPlaces() {
    if (this.selectPlace === 'All') {
      this.filterPlaces = this.places;
    } else {
      this.filterPlaces = this.places.filter((p) => p.name == this.selectPlace);
    }
  }

  onCancelButton(place: Place) {
    this.placeService.removePlace(place);
  }
}
