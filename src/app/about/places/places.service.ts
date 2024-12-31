import { Injectable } from '@angular/core';
import { Place } from './places.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  private places: Place[] = [];

  private placeSubject = new BehaviorSubject<Place[]>(this.places); //發出新數據

  currentPlace = this.placeSubject.asObservable(); //BehaviorSubject轉換為Observable

  setPlace(newPlace: Place) {
    this.places.push(newPlace);
    this.placeSubject.next([...this.places]);
  }

  removePlace(removePlace: Place) {
    this.places = this.places.filter((p) => p !== removePlace);
    this.placeSubject.next([...this.places]);
  }
}
