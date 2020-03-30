import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage/manage.component';
import { Routes, RouterModule } from '@angular/router';
import { UsersListModule } from '../users-list/users-list.module';
import { UserDetailsComponent } from '../user-details/user-details.component';

const routes: Routes = [
  {
    path: '', component: ManageComponent,
    children: [
      { path: 'details/:id', component:  UserDetailsComponent}
    ]
  },
];

@NgModule({
  declarations: [ManageComponent],
  imports: [
    CommonModule,
    UsersListModule,
    RouterModule.forChild(routes)
  ]
})
export class ManageModule { }
