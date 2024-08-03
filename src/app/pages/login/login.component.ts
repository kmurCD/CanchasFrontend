import { Component, inject } from '@angular/core';
import { AccesoService } from '../../services/accesoService';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../interfaces/Login';
import { Subscriber } from 'rxjs';
import { E } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private accesoService = inject(AccesoService);
  private router = inject(Router);
  private formBuild = inject(FormBuilder);

  public formLogin: FormGroup = this.formBuild.group({
    usuario: ['', Validators.required],
    contrasenia: ['', Validators.required],
  });

  IniciarSesion() {
    if (this.formLogin.invalid) return;

    const objeto: Login = {
      usuario: this.formLogin.value.usuario,
      contrasenia: this.formLogin.value.contrasenia,
    };
    this.accesoService.login(objeto).subscribe({
      next: (data) => {
        if (data.token) {
          localStorage.setItem('token', data.token)
          this.router.navigate(['home']);
        }else{
          alert("Credenciales Incorrectas")
        }
      },
      error:(error) =>{
        console.log(error.message);
      }
    });
  }
  registrarse(){
    this.router.navigate(['registro'])
  }
}
