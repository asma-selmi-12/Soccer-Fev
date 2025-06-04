import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  connectedUser: any;

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.isloged();
  }

  isloged() {
    const token = localStorage.getItem('token');

    if (token) {
      const decoded = jwtDecode(token);
      this.connectedUser = decoded;
      
    }

    return !!token;
  }


  logout(){

    localStorage.removeItem("token")
    this.route.navigate(['/login'])

  }


}
