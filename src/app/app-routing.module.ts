import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ImgBackgroundStackComponent } from './component/img-background-stack/img-background-stack.component';
import { ImgStacksComponent } from './component/img-stacks/img-stacks.component';

const routes: Routes = [
  {path: '', component: ImgStacksComponent},
  {path: 'Tester', component: ImgBackgroundStackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
