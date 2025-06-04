import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { MustMatch } from 'src/app/shared/confirmerpwd';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm !: FormGroup
role:string=window.location.pathname=="/signup/admin" ? "admin" : "user"
  constructor(private formbuilder:FormBuilder,private tservice:UsersService) {
    
   }

  ngOnInit(): void {
    this.signupForm=this.formbuilder.group({
      firstName:['', [Validators.minLength(3), Validators.required] ],
       lastName:['',[Validators.required,  Validators.pattern('^[A-Za-zÀ-ÖØ-öø-ÿ]+$')]],
       email:['',[Validators.required,  Validators.email]],
       pwd:['',[Validators.required,  Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]],
       confirmPwd:['']

    } ,
  {
    validators:MustMatch('pwd','confirmPwd')
  }
  
  )

    
    


  }

  
  
  signUp(){
    console.log(window.location.pathname);
    
    this.signupForm.value.role=this.role
      this.tservice.addUser(this.signupForm.value).subscribe((res)=>{
       console.log(res.message);
      
     })
  }

}
