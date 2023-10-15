import { NgModule} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { SuperheroListComponent } from './superhero-list/superhero-list.component';
import { SuperheroDetailComponent } from './superhero-detail/superhero-detail.component';
import { SuperheroService } from './superhero.service';
import { AddHeroFormComponent } from './add-hero-form/add-hero-form.component';




@NgModule({
  declarations: [
    SuperheroListComponent,
    SuperheroDetailComponent,
    AddHeroFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  exports: [
     SuperheroListComponent,
     SuperheroDetailComponent,
    AddHeroFormComponent,
     CommonModule, 
     FormsModule 
  ],
  providers: [SuperheroService]
})
export class SuperheroModule {
 }
