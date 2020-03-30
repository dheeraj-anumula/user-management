import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveComponent } from './active/active.component';
import { ActiveUsersPipe } from './active-users.pipe';
import { UsersListModule } from '../users-list/users-list.module';

@NgModule({
  declarations: [ActiveComponent, ActiveUsersPipe],
  imports: [
    CommonModule,
    UsersListModule
  ],
  exports:[ActiveComponent]
})
export class ActiveModule { }
