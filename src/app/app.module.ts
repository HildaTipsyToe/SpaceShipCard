import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgBackgroundStackComponent } from './component/img-background-stack/img-background-stack.component';
import { ImgStacksComponent } from './component/img-stacks/img-stacks.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgBackgroundStackComponent,
    ImgStacksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
