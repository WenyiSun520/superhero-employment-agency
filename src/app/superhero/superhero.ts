export class Superhero{
     heroId:string
     name:string
     skills: any[]
     professions: any[]

    constructor(heroId:string, name:string, skills:any[], professions:any[]){
      this.heroId = heroId;
      this.name = name;
      this.skills = skills
      this.professions = professions
    }

    setKills(skill:any[]){
      this.skills = this.skills.concat(skill)
    }

    setProfessions(profession:any[]){
      this.professions = this.professions.concat(profession)
    }

    updateName(newName:string){
        this.name = newName
    }

    toString():string{
      return `Id: ${this.heroId},
              name: ${this.name},
              skills: ${this.skills.join(', ')}
              professions: ${this.professions.join(', ')}`

    }
}