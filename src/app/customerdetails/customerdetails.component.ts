import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {

  constructor(private fb: FormBuilder,private router:Router) { }

  loginForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required,Validators.maxLength(10)]],
    pincode : ['',[Validators.required,Validators.maxLength(6)]],
    locality : ['',[Validators.required]],
    address : ['',[Validators.required]],
    city : ['',[Validators.required]],
    landmark : ['',[Validators.required]],
    type: ['', Validators.required]
  })

  checkout() {
    this.router.navigateByUrl("/success");
  }
  ngOnInit(): void {
  }

}
