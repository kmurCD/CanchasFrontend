import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,HomeComponent,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})
export class AppComponent {
  title = 'frontend_canchasDeportivas';
}
