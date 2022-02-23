import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup! : FormGroup ;

  // loginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // })

  constructor (private authservice: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      pwd: new FormControl('',[Validators.required])
    });
  }
  onSubmit(){
    if(this.formGroup.valid){
      this.authservice.login(this.formGroup.value).subscribe(result =>{
        if(result.success){
          console.log(result);
          alert(result.message);
        }else{
          alert(result.message);
        }
      })
    }

  }
  
  // onSubmit(): void {

  //   console.log(this.loginForm.value);
  // }

}
