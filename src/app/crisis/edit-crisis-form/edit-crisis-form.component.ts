import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { CrisisService } from '../crisis.service';
import { Crisis } from '../crisis';
import { ActivatedRoute,NavigationStart,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/service/dialog.service';
@Component({
  selector: 'app-edit-crisis-form',
  templateUrl: './edit-crisis-form.component.html',
  styleUrls: ['./edit-crisis-form.component.css']
})
export class EditCrisisFormComponent implements OnInit{
  selectedCrisis:any  
  isSubmit:boolean = false
  crisisForm = this.formbuilder.group({
    id:"",
    name: "",
    description: "",
    location:""
  })

  constructor(private formbuilder:FormBuilder, private crisisService:CrisisService, 
    private activeRoute:ActivatedRoute, private router:Router,private dialogService:DialogService){
      this.router.events.forEach((event) => {
    if(event instanceof NavigationStart) {
      if (event.navigationTrigger === 'popstate') {
       this.canDeactivate()
      }
    }
  });
    }
  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((params)=>{
      if(params['content']){
       let data = JSON.parse(params['content'])
        this.selectedCrisis = new Crisis(data.id, data.name,data.description,data.location);
        this.crisisForm.value.id = data.id;
        this.crisisForm.value.name = data.name;
        this.crisisForm.value.description = data.description;
        this.crisisForm.value.location = data.location;
      }
    })
  }



 

 

  handleSubmit():void{
    let updatedCrisis = new Crisis(this.crisisForm.value.id ?? this.selectedCrisis.id, this.crisisForm.value.name ?? this.selectedCrisis.name, 
    this.crisisForm.value.description ?? this.selectedCrisis.description, this.crisisForm.value.location ?? this.selectedCrisis.location)
    this.crisisService.updateCrisis(updatedCrisis)
    this.isSubmit = true;
    this.crisisForm.reset();
  }

  handleCancel(): void{
     this.crisisForm.reset();
     if(this.canDeactivate()){
     this.router.navigate(['/app-crisis-list'])
     }
  
  }

  canDeactivate(): Observable<boolean> | boolean {
  // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
  if (!this.selectedCrisis || this.isSubmit === true) {
    return true;
  }
  // Otherwise ask the user with the dialog service and return its
  // observable which resolves to true or false when the user decides
  return this.dialogService.confirm('Discard changes?');
}

}
