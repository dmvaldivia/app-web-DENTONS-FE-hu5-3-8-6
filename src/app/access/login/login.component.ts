import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    loginUsuario: ['', [Validators.required]],
    passwordUsuario: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, 
              private readonly userService: UserService,
              private router: Router) { }

  login(dataLogin){
    this.userService.login(dataLogin).subscribe((rest: any) => {
      if(rest.isSuccess) {
        sessionStorage.setItem('token', rest.data.token);
        sessionStorage.setItem('user', rest.data.nombres + ' ' + rest.data.apellidoPaterno);

        this.router.navigateByUrl('/home', { skipLocationChange: false }).then(() => {
          this.router.navigate(['home']);
          window.location.reload();
        })
      } else {
        alert('Credenciales Invalidas');
      }
    })
  }
  
  onSubmit() {
    if(this.loginForm.valid) {
      this.login(this.loginForm.value);
    } else {
      alert("Formulario no valido");
    }
  }

  ngOnInit(): void {
  }

}
