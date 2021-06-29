import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  loginForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required,Validators.maxLength(10)]],
    pincode : ['',[Validators.required,Validators.maxLength(6)]],
    locality : ['',[Validators.required]],
    address : ['',[Validators.required]],
    city : ['',[Validators.required]],
    landmark : ['',[Validators.required]]
  })
  ngOnInit(): void {
  }

}
