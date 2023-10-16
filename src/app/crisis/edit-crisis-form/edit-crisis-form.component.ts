import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators} from '@angular/forms';
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
  selectedCrisis = new Crisis("crisis001","n/a","n/a","n/a") ;
  isSubmit:boolean = false
  crisisForm = this.formbuilder.group({
    id:[this.selectedCrisis.id,Validators.required],
    name: [this.selectedCrisis.name,Validators.required],
    description: [this.selectedCrisis.description],
    location:[this.selectedCrisis.location,Validators.required]
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
        this.crisisForm.patchValue(data)
      }
    })
  }


 

  handleSubmit():void{
    if(this.crisisForm.valid){
    console.log(this.crisisForm.value)
    this.crisisService.updateCrisis(this.crisisForm.value)
    this.crisisForm.reset();
    this.isSubmit = true;
    }
  }

  handleCancel(): void{
     this.crisisForm.reset();
     if(this.canDeactivate() === true){
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
