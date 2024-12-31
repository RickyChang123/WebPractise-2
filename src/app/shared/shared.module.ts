import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDirective } from '../app.directive';

@NgModule({
  declarations: [AppDirective],
  exports: [AppDirective],
  imports: [CommonModule],
})
export class SharedModule {}
