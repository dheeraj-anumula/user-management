import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeletedComponent } from './deleted/deleted.component';
import { ActiveComponent } from './active/active.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'active',component:ActiveComponent},
  {path:'deleted',component:DeletedComponent},
  {
    path:'manage',
    loadChildren:()=>import('./manage/manage.module').then(
      (file)=> file.ManageModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
