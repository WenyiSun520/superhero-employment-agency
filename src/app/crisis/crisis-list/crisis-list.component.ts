import { Component, OnInit } from '@angular/core';
import { CrisisService } from '../crisis.service';
import { Crisis } from '../crisis';
import { RouterModule,Router } from '@angular/router';


@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css'],
 
})
export class CrisisListComponent implements OnInit {
  crisistList: any[] = []
  isTableOpened: boolean = false;
  selectedCrisis: any;

  constructor(private crisisService:CrisisService, private router:Router){}

  ngOnInit(): void {
   this.crisistList = this.crisisService.getCrisisList();
  }

  handleNavigation(index:number, id:string){
    this.router.navigate(['app-crisis-list','app-edit-crisis-form',id],{
      queryParams:{content:JSON.stringify(this.crisistList[index])}
    })
   
  }





}
