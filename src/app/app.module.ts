import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BottomComponent } from './bottom/bottom.component';
import { BackgroundImgComponent } from './background-img/background-img.component';
import { HeaderModule } from './header/header.module';
import { routes } from './app.routes';
import { SpaceModule } from './space/space.module';
import { AboutModule } from './about/about.module';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BottomComponent,
    BackgroundImgComponent,
    UserComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterOutlet,
    HeaderModule,
    SpaceModule,
    AboutModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
})
export class AppModule {}
