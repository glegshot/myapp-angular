import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-model-form-component',
  templateUrl: './model-form-component.component.html',
  styleUrls: ['./model-form-component.component.less']
})
export class ModelFormComponentComponent implements OnInit {

  myForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      name: new FormControl(),
      age: new FormControl(),
      city: new FormControl(),
      country: new FormControl()
    });

  }

}
