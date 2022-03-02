import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-module',
  templateUrl: './vendor-module.component.html',
  styleUrls: ['./vendor-module.component.scss']
})
export class VendorModuleComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  Openeditshop(strtype: string) {
  }

  onClickSidemenuRefresh(URL: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([URL]));
  }

  onclickSupport(strtype: string) {
    localStorage.setItem("supportlink", strtype);
    this.onClickSidemenuRefresh('/vendor/faq')
  }
}
