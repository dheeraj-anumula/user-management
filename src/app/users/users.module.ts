import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterUsersPipe } from './filter-users.pipe';
import { UsersListModule } from '../users-list/users-list.module';
import { UsersComponent } from './users.component';



@NgModule({
  declarations: [UsersComponent,FilterUsersPipe],
  imports: [
    CommonModule,
    UsersListModule
  ],
  exports:[UsersComponent]
})
export class UsersModule { }
