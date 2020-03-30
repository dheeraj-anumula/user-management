import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedComponent } from './deleted/deleted.component';
import { DeletedUsersPipe } from './deleted-users.pipe';
import { UsersListModule } from '../users-list/users-list.module';

@NgModule({
  declarations: [DeletedComponent, DeletedUsersPipe],
  imports: [
    CommonModule,
    UsersListModule
  ],
  exports:[DeletedComponent]
})
export class DeletedModule { }
