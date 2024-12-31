import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceComponent } from './space.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SpaceComponent],
  exports: [SpaceComponent],
  imports: [CommonModule, SharedModule],
})
export class SpaceModule {}
