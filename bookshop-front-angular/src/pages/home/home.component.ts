import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) { }

  goToLoginPage(): void {
    this.router.navigate(['/login']);
  }

  goToRegisterPage(): void {
    this.router.navigate(['/register']);
  }
}
