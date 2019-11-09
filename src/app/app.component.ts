import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Finance Manager';

  constructor(private router: Router, private authService: AuthService) {
  }

  category() {
    this.router.navigate(['category']);
  }

  operation() {
    this.router.navigate(['operation']);
  }

  transaction() {
    this.router.navigate(['transaction']);
  }


}

