import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Response } from '../model/response';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  hide: boolean = false;

  tempArr : any[] = []

  userError : boolean = false;

  constructor(private fb: FormBuilder,private loginService: LoginService,private router: Router) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })


  onLogin() {
    this.loginService.checkLogin(this.loginForm.value.email,this.loginForm.value.password).subscribe(data => 
    {
      if(String((data as any).statusCode == 200)){
        localStorage.setItem("ACCESS_TOKEN",String((data as any).token))
        this.router.navigateByUrl('/home')
      }
        // this.tempArr.push(data)
        // for(var i of this.tempArr){  
        //   localStorage.setItem("ACCESS_TOKEN",i.token)
        //   this.router.navigateByUrl('/home')
        // }
     },error => {
        this.userError = true
     }
    )    
  }

}
