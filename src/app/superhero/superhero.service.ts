import { Injectable } from '@angular/core';
import { Superhero } from './superhero';


@Injectable({
  providedIn: 'root'
})
export class SuperheroService{
  heroList: Superhero[] = [
    new Superhero("hero001", "batman", ["Logical Reasoning and Analysis", "Mixed Martial Arts Expert", "Nightwalker"],["criminal justice"]),
    new Superhero("hero002", "catwoman", ["Agile", "Exceptional Tracking Skills"], ["Proficient in Infiltration"])
  ]

  constructor() { }

  getHeroList(){
    return this.heroList
  }
  getSingleHeroById(id:string):Superhero{
     let index = this.heroList.findIndex((h)=> h.heroId === id)
     return this.getHeroList()[index];
  }

  addNewHero(newHero:Superhero){
    this.heroList.push(newHero)
  }

  updateHeroName(name:string, id:string){
    let index = this.heroList.findIndex((h)=> h.heroId === id)
    this.heroList[index].updateName(name);
  }

  deleteHero(id:string){
    let index = this.heroList.findIndex((h)=> h.heroId === id)
    this.heroList.splice(index,1)

  }
}
