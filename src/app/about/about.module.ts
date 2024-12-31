import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { AboutComponent } from './about.component';
import { FormsModule } from '@angular/forms';
import { PlacesComponent } from './places/places.component';
import { PlaceItemComponent } from './places/place-item/place-item.component';
import { NewPlaceComponent } from './places/new-place/new-place.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AboutComponent,
    PlacesComponent,
    PlaceItemComponent,
    NewPlaceComponent,
  ],
  exports: [AboutComponent],
  imports: [CommonModule, FormsModule, NgFor, NgIf, SharedModule],
})
export class AboutModule {}
