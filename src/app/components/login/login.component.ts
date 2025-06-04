import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup
  constructor(private formbuilder:FormBuilder,private tservice:UsersService,private toster:ToastrService) { }

  ngOnInit(): void {

this.loginForm=this.formbuilder.group({
     
       email:['',[Validators.required,  Validators.email]],
       pwd:['',[Validators.required,  Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]],
       

    })

  }


  login(){

    console.log('hello');

    this.tservice.login(this.loginForm.value).subscribe((res)=>{
      console.log(res.message);

      if (res.message=='0') {
        this.toster.error('login ', 'email invalid');
      }
      else {
        if (res.message=='1') {
          this.toster.error('login ', 'PWD invalid');
        }
        else{
          this.toster.success('login ', 'bien venu',{timeOut: 3000, progressBar:true });
          console.log(res.token);
          
          localStorage.setItem('token',res.token)

        }
      }

      
      
    })
    
    
    
  }

}
