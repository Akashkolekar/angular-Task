import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SbookComponent } from './sbook/sbook.component';
import { PostpageComponent } from './postpage/postpage.component';

const routes: Routes = [
  { path:'', redirectTo:'login' , pathMatch:'full' },
  { path:'login',component:SbookComponent },
  { path:'post-page',component:PostpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
