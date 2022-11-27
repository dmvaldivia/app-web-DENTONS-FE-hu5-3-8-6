import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  
  contactusForm = this.fb.group({
    person: this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    }),
    email: ['', [Validators.required, Validators.email]],
    message: ['']
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    if(this.contactusForm.valid) {
      console.log(this.contactusForm.value);
    } else {
      alert("Formulario no valido");
    }
  }

  ngOnInit(): void {
  }

}
