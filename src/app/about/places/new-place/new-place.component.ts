import { Component } from '@angular/core';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrl: './new-place.component.css',
})
export class NewPlaceComponent {
  selectPlace: string = 'All';

  onChangeFliter(value: string) {
    this.selectPlace = value;
  }
}
