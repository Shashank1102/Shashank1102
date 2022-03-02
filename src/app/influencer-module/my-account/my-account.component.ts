import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }
  gotoEditshop() {
    this.router.navigateByUrl('/star/edit-shop');
  }
}
