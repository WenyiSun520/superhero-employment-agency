import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SuperheroListComponent } from './superhero-list/superhero-list.component';
import { SuperheroDetailComponent } from './superhero-detail/superhero-detail.component';
import { SuperheroService } from './superhero.service';




@NgModule({
  declarations: [
    SuperheroListComponent,
    SuperheroDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
     SuperheroListComponent,
     SuperheroDetailComponent,
     CommonModule, 
     FormsModule 
  ],
  providers: [SuperheroService]
})
export class SuperheroModule {
 }
