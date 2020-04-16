import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { Routes, RouterModule } from '@angular/router';
import { UsersListModule } from '../users-list/users-list.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {
    path: '', component: ManageComponent,
    children: [
      { path: 'details/:id', component:  UserDetailsComponent},
      { path: 'edit/:id', component:  EditUserComponent},
      { path: 'create', component:  CreateUserComponent}
    ]
  },
];

@NgModule({
  declarations: [ManageComponent, EditUserComponent, CreateUserComponent],
  imports: [
    CommonModule,
    UsersListModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ManageModule { }
