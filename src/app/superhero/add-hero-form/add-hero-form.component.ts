import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Superhero } from '../superhero';
import { SuperheroService } from '../superhero.service';

@Component({
  selector: 'app-add-hero-form',
  templateUrl: './add-hero-form.component.html',
  styleUrls: ['./add-hero-form.component.css']
})
export class AddHeroFormComponent {
  id:number = 2;
  heroId:string = "hero00"
  newHeroForm = this.formbuilder.group(
    {
      name: "",
      skills:"",
      professions:""
    }
  )

  constructor(private formbuilder:FormBuilder, private superheroService:SuperheroService){}

  onSubmit():void{
    ++this.id;
    let name = this.newHeroForm.value.name ?? "default name";
    let skills = this.newHeroForm.value.skills?.split(',') ?? []
    let professions = this.newHeroForm.value.professions?.split(',') ?? []
    let newHero = new Superhero(this.heroId+this.id, name, skills, professions)
    this.superheroService.addNewHero(newHero)
  
    this.newHeroForm.reset()

  }


}
