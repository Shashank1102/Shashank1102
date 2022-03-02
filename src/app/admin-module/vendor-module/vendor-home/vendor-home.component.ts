import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.vendorContent',
  templateUrl: './vendor-home.component.html',
  styleUrls: ['./vendor-home.component.scss']
})
export class VendorHomeComponent implements OnInit {

  vendorRejectModal:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
