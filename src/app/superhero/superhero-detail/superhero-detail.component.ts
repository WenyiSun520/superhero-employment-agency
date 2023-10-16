import { Component, OnInit,Input } from '@angular/core';
import { SuperheroService } from '../superhero.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-superhero-detail',
  templateUrl: './superhero-detail.component.html',
  styleUrls: ['./superhero-detail.component.css']
})
export class SuperheroDetailComponent implements OnInit{
  Id: string
  Hero:any
  heroName:string
  toggle:boolean = false



constructor(private superheroService:SuperheroService, private router:Router, private activedRouter:ActivatedRoute){
  this.Id = ""
  this.heroName = ""
     console.log(this.activedRouter.snapshot.url.join('/'))

  }
  ngOnInit(): void {
  this.activedRouter.params.subscribe(param=> this.Id = param['id'])
  this.Hero = this.superheroService.getSingleHeroById(this.Id)
  this.heroName = this.Hero.name
  }

  handleGoBack(){
    this.router.navigate(['/app-superhero-list'])
  }

  handleOpenInputBox(){
    this.toggle = true;
  }

  handleSubmit(){
    this.superheroService.updateHeroName(this.heroName, this.Id)
    this.toggle = false;
  }

}
