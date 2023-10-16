import { Injectable } from '@angular/core';
import { Crisis } from './crisis';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {
  crisisList: Crisis[] = [
   new Crisis("crisis001", "Armed Robbery Near Playground","Police rerport the suspect stole cash at the point of an unknown weapon", "Newark, NJ"),
   new Crisis("crisis002", "Report of Dispute involving Knife","Police are responding to a report of a dispute involving a knife.", "Fort Hamilton,Brooklyn")
  ]
  constructor() { }

  getCrisisList(){
    return this.crisisList;
  }

  updateCrisis(crisis: any){
      let index = this.crisisList.findIndex((h)=> h.id === crisis.id)
      let selectedCrisis = this.getCrisisList()[index]
      selectedCrisis.name = crisis.name
      selectedCrisis.description = crisis.description
      selectedCrisis.location = crisis.location
  }

  deleteCrisis(id:string){
    let index = this.crisisList.findIndex((h)=> h.id === id)
    this.crisisList.splice(index,1)
  }

  addNewCrisis(crisis:Crisis){
    this.crisisList.push(crisis)
  }


}
