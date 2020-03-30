import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { UserModule } from '../user/user.module';

@NgModule({
    declarations: [UsersListComponent],
    imports: [
        CommonModule,
        UserModule
    ],
    exports: [UsersListComponent]
})
export class UsersListModule { }