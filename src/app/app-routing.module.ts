import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperheroListComponent } from './superhero/superhero-list/superhero-list.component';
import { SuperheroDetailComponent } from './superhero/superhero-detail/superhero-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo:"app-superhero-list", pathMatch:"full"},
  {path:'app-superhero-list', component:SuperheroListComponent},
  {path:'app-superhero-detail/:id', component:SuperheroDetailComponent},
  {path: '**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
