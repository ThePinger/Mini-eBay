import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit()
  {
    this.authService.isLoggedIn().subscribe(msg => {}, err => {this.router.navigate([''])}); 
  }

  checkout()
  {

  }

}
