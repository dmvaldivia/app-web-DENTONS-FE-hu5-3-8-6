import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  usernewForm = this.fb.group({
    loginUsuario: ['', Validators.required],
    passwordUsuario: ['', Validators.required],
    idPerfil: [0, Validators.required],
    nombres: ['', Validators.required],
    apellidoPaterno: ['', Validators.required],
    apellidoMaterno: ['', Validators.required],
    documentoIdentidad: ['', Validators.required]
  });  

  constructor(private fb: FormBuilder, private readonly userService: UserService, private router: Router) { }

  insert(data) {
    const header = {};

    this.userService.insert(data, header).subscribe((rest: any) => {
      if(rest.isSuccess) {
        alert("Usuario creado con ID: " + rest.data.id + " y Nombre: " + rest.data.nombre );
        this.router.navigate(['home']);
      } else {
        alert(rest.errorMessage);
      }
    })
  }

  onSubmit() {
    if(this.usernewForm.valid) {
      console.log(this.usernewForm.value);
      this.insert(this.usernewForm.value);
    } else {
      alert("Formulario no valido");
    }
  }

  ngOnInit(): void {
  }

}
