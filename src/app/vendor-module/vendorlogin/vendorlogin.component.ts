import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Abstract } from 'src/shared/helper/abstract';
import { vendorlogin, Vendormodel } from 'src/shared/model/fake/fakeDataModel';
import { UserService } from 'src/shared/services/user/user.service';
import { VendorService } from 'src/shared/services/vendor/vendor.service';

@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.scss']
})
export class VendorloginComponent implements OnInit {
  objVendormodel: Vendormodel = new Vendormodel();
  objvendorlogin: vendorlogin = new vendorlogin();
  isVendorLoginShown: boolean = true;
  isVendorRegisterShown: boolean = false;
  isVendorRegisterStep1: boolean = true;
  isVendorRegisterStep2: boolean = false;
  isVendorRegisterStep3: boolean = false;
  issubmitreg: boolean = false;
  issubmittab1: boolean = false;
  isActiveDownloadbtn: boolean = false;
  isDownloadTOC: boolean = false;
  isUploadTOC: boolean = false;
  issubmitlogin: boolean = false;
  displayStyle = "none";

  //@ViewChild('content') content: any;
  constructor(
    private vendorservice: VendorService,
    //private modalService: NgbModal
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  goToRegister() {
    this.isVendorLoginShown = false;
    this.isVendorRegisterShown = true;
    this.isVendorRegisterStep1 = true;
    this.isVendorRegisterStep2 = false;
    this.isVendorRegisterStep3 = false;

  }

  onClickStep1() {
    this.issubmitreg = true
    if (
      Abstract.handelnullundefind(this.objVendormodel.VendorName, 'string') == ""
      || Abstract.handelnullundefind(this.objVendormodel.IndustryID, 'number') == 0
      || Abstract.handelnullundefind(this.objVendormodel.VendorEmail, 'string') == ""
    ) {
      return;
    }
    this.isVendorRegisterStep1 = false;
    this.isVendorRegisterStep2 = true;
    this.isVendorRegisterStep3 = false;
  }

  onClickStep2() {
    this.issubmittab1 = true;
    if (Abstract.handelnullundefind(this.objVendormodel.FullName, 'string') == ""
      || Abstract.handelnullundefind(this.objVendormodel.UserName, 'string') == ""
      || Abstract.handelnullundefind(this.objVendormodel.Password, 'string') == ""
      || Abstract.handelnullundefind(this.objVendormodel.PhoneNumber, 'string') == ""
    ) {
      return
    }
    this.isVendorRegisterStep1 = false;
    this.isVendorRegisterStep2 = false;
    this.isVendorRegisterStep3 = true;
  }

  UploadDocument() {
    this.isActiveDownloadbtn = true;
  }

  DownloadTOC() {
    this.isDownloadTOC = true;
  }

  UploadTOC() {
    this.isUploadTOC = true;
  }

  AddVendor() {

    this.vendorservice.AddVendor(this.objVendormodel).toPromise().then((response) => {
      if (response.statuscode == 200) {
        // this.IsOpenSuccessfully = true;
        // let userid = 0;
        if (response.data.length > 0) {
        }

      }
      else {
        // this.showToast(Severity.ERROR, Title.ERROR, response.message);
        // this.btnActiveloading = false;
      }
    },
      (error) => {
        //this.btnActiveloading = false;
        console.log("Add Vendor" + JSON.stringify(error));
      });
  }

  Closepopup() {
    this.displayStyle = "none";
    this.isVendorLoginShown = true;
    this.isVendorRegisterShown = false;
  }
  ValidateUser() {


    this.issubmitlogin = true;
    if (Abstract.handelnullundefind(this.objvendorlogin.Password, 'string') == ""
      || Abstract.handelnullundefind(this.objvendorlogin.UserName, 'string') == ""
    ) {
      return
    }
    else {
      localStorage.removeItem("verifyAdd");
      this.router.navigateByUrl('/vendor/dashboard');
      //this.displayStyle='block';
      // this.objvendorlogin.DeviceType="Web";

      // this.vendorservice.ValidateUser(this.objvendorlogin).toPromise().then((response) => 
      // {
      //   if (response.statuscode == 200) 
      //   {
      //     this.displayStyle='block';
      //     // this.IsOpenSuccessfully = true;
      //     // let userid = 0;
      //     if (response.data.length > 0) 
      //     {
      //     }

      //   }
      //   else {
      //     // this.showToast(Severity.ERROR, Title.ERROR, response.message);
      //     // this.btnActiveloading = false;
      //   }
      // },
      //   (error) => {
      //     //this.btnActiveloading = false;
      //     console.log("Add Vendor" + JSON.stringify(error));
      //   });
    }
  }
}
