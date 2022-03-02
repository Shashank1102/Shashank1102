import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Abstract } from 'src/shared/helper/abstract';
import { vendorlogin, Vendormodel } from 'src/shared/model/fake/fakeDataModel';
import { VendorService } from 'src/shared/services/vendor/vendor.service';

@Component({
  selector: 'app-starlogin',
  templateUrl: './starlogin.component.html',
  styleUrls: ['./starlogin.component.scss']
})
export class StarloginComponent implements OnInit {
  objvendorlogin: vendorlogin = new vendorlogin();
  objVendormodel: Vendormodel = new Vendormodel();
  isVendorLoginShown: boolean = true;
  isVendorRegisterShown: boolean = false;
  isVendorRegisterStep1: boolean = true;
  isVendorRegisterStep2: boolean = false;
  isVendorRegisterStep3: boolean = false;
  isVendorRegisterStep4: boolean = false;
  isVendorRegisterStep5: boolean = false;
  isActiveDownloadbtn: boolean = false;
  issubmitreg: boolean = false;
  issubmittab1: boolean = false;
  issubmitlogin: boolean = false;
  isDownloadTOC: boolean = false;
  isUploadTOC: boolean = false;
  displayStyle = "none";

  constructor(public router: Router, private vendorservice: VendorService) { }

  ngOnInit(): void 
  {
    // debugger
    // setTimeout(() => {
    //   this.router.navigateByUrl('/star');  
    // }, 20);
    
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

  Closepopup() {
    this.displayStyle = "none";
    this.isVendorLoginShown = true;
    this.isVendorRegisterShown = false;
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

  goToRegister() {
    this.isVendorLoginShown = false;
    this.isVendorRegisterShown = true;
    this.isVendorRegisterStep1 = true;
    this.isVendorRegisterStep2 = false;
    this.isVendorRegisterStep3 = false;

  }

  onClickStep1() {
    this.issubmitreg = true
    // if (
    //   Abstract.handelnullundefind(this.objVendormodel.VendorName, 'string') == ""
    //   || Abstract.handelnullundefind(this.objVendormodel.IndustryID, 'number') == 0
    //   || Abstract.handelnullundefind(this.objVendormodel.VendorEmail, 'string') == ""
    // ) {
    //   return;
    // }
    this.isVendorRegisterStep1 = false;
    this.isVendorRegisterStep2 = true;
    this.isVendorRegisterStep3 = false;
  }

  onClickStep2() {
    this.issubmittab1 = true;
    // if (Abstract.handelnullundefind(this.objVendormodel.FullName, 'string') == ""
    //   || Abstract.handelnullundefind(this.objVendormodel.UserName, 'string') == ""
    //   || Abstract.handelnullundefind(this.objVendormodel.Password, 'string') == ""
    //   || Abstract.handelnullundefind(this.objVendormodel.PhoneNumber, 'string') == ""
    // ) {
    //   return
    // }
    this.isVendorRegisterStep1 = false;
    this.isVendorRegisterStep2 = false;
    this.isVendorRegisterStep3 = true;
  }

  onClickStep3() {
    this.issubmittab1 = true;
    this.isVendorRegisterStep1 = false;
    this.isVendorRegisterStep2 = false;
    this.isVendorRegisterStep3 = false;
    this.isVendorRegisterStep4 = true;
  }
  onClickStep4() {
    this.issubmittab1 = true;
    this.isVendorRegisterStep1 = false;
    this.isVendorRegisterStep2 = false;
    this.isVendorRegisterStep3 = false;
    this.isVendorRegisterStep4 = false;
    this.isVendorRegisterStep5 = true;
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
      this.router.navigateByUrl('/star/dashboard');
    }
  }
}
