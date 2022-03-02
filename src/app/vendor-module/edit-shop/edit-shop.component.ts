import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.scss']
})
export class EditShopComponent implements OnInit {
  Bumiketypechk1: boolean = false;
  Bumiketypechk2: boolean = false;
  SelectAll: boolean = false;
  isConfirmModalShow: boolean = false;
  strtitle: string = "";

  constructor(public router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.opentab();
    }, 100);
  }

  onClickConfirmDeleteUser() {
    this.isConfirmModalShow = !this.isConfirmModalShow;
  }

  onselectbumitype(strtype: string) {
    if (strtype == "Yes") {
      this.Bumiketypechk2 = false;
    }
    else if (strtype == "No") {
      this.Bumiketypechk1 = false;
    }
  }
  gotoMyaccount() {
    this.onClickSidemenuRefresh('/vendor/my-account');
  }
  onClickSidemenuRefresh(URL: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([URL]));
  }
  opentab() {
    if (localStorage.getItem("Editshop") != undefined
      && localStorage.getItem("Editshop") == 'shop') {
      document.getElementById("v-pills-home-tab")?.click();
    }
    if (localStorage.getItem("Editshop") != undefined
      && localStorage.getItem("Editshop") == 'profile') {
      document.getElementById("v-pills-profile-tab")?.click();
    }
    if (localStorage.getItem("Editshop") != undefined
      && localStorage.getItem("Editshop") == 'user') {
      document.getElementById("v-pills-messages-tab")?.click();
    }
    if (localStorage.getItem("Editshop") != undefined
      && localStorage.getItem("Editshop") == 'payments') {
      document.getElementById("v-pills-settings-tab")?.click();
    }
  }
  editshop(strtitle: string = "Edit Shop") {
    this.strtitle = strtitle;
  }

}
