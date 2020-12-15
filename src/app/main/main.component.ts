import { Component, OnInit } from '@angular/core';
import { User } from '@shared/models/user.interface';
import { Observable } from 'rxjs';
import { AuthService } from '@auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	routes: Object[] = [
    {
      title: ' Trabajadores',
      route: '/trabajadores',
      icon: 'group',
      subtitle:'Person'
    },
    {
      title: 'Usuarios',
      route: '/usuarios',
      icon: 'collections',
    },
	]
  public user$: Observable<User> = this.authSvc.afAuth.user;

  constructor(public authSvc: AuthService, private router: Router) {}

  async onLogout() {
    try {
      await this.authSvc.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit() {

  }
}