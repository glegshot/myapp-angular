import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-form-component',
  templateUrl: './model-form-component.component.html',
  styleUrls: ['./model-form-component.component.less']
})
export class ModelFormComponentComponent implements OnInit {

  myForm!: FormGroup;
  name!:FormControl;
  age!:FormControl;
  city!:FormControl;
  country!:FormControl;

  constructor() { }

  ngOnInit(): void {

    this.createFormControls();
    this.createForm();

  }

  createForm(){
    this.myForm = new FormGroup({
      name:this.name,
      age:this.age,
      city:this.city,
      country:this.country
    });
  }

  createFormControls(){
    this.name = new FormControl('',Validators.minLength(10)),
    this.age = new FormControl('',[Validators.required,Validators.min(1)]),
    this.city = new FormControl('',[Validators.required,Validators.minLength(5)]),
    this.country = new FormControl()
  }

}
