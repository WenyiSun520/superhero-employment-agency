import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../superhero.service';
import { Superhero } from '../superhero';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.css'],
  providers: [SuperheroService]
})
export class SuperheroListComponent implements OnInit{
  superheros: Superhero[];

  constructor(private superheroService:SuperheroService, private router:Router, private activedRouter:ActivatedRoute){
    this.superheros = []
  }

  // initilize superheros with list fetched in service
  ngOnInit(): void {
    this.superheros = this.superheroService.getHeroList();
  }

  handleDeleteSuperhero(id:string){
    this.superheroService.deleteHero(id);
  }

  handleRedirectToDetailPage(id:string){
    this.router.navigate(['/app-superhero-detail', id]);

  }

  

}
