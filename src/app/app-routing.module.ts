import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperheroListComponent } from './superhero/superhero-list/superhero-list.component';
import { SuperheroDetailComponent } from './superhero/superhero-detail/superhero-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CrisisListComponent } from './crisis/crisis-list/crisis-list.component';
import { EditCrisisFormComponent } from './crisis/edit-crisis-form/edit-crisis-form.component';
import { canDeactivatedGuard } from './guard/can-deactivated.guard';

const routes: Routes = [
  {path:'', redirectTo:"app-superhero-list", pathMatch:"full"},
  {path:'app-superhero-list', component:SuperheroListComponent},
  {path:'app-superhero-detail/:id', component:SuperheroDetailComponent},
  {path: 'app-crisis-list', component:CrisisListComponent,
      children:[
        {path: 'app-edit-crisis-form/:id', component:EditCrisisFormComponent, canDeactivate:[canDeactivatedGuard]}
      ]
  },
  // {path: 'app-edit-crisis-form/:id', component:EditCrisisFormComponent},
  {path: '**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
