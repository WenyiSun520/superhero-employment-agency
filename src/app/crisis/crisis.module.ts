import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { EditCrisisFormComponent } from './edit-crisis-form/edit-crisis-form.component';





@NgModule({
  declarations: [
    CrisisListComponent,
    EditCrisisFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
   FormsModule,
    RouterModule
  ],
  exports:[
    CrisisListComponent,
    EditCrisisFormComponent,
  ],
})
export class CrisisModule { }
