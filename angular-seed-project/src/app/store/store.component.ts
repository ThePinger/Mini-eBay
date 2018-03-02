import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() 
  {
      this.authService.isLoggedIn().subscribe(msg => {}, err => {this.router.navigate([''])});
  }

}
