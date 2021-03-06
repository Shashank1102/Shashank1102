import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  isLoginContentShown: boolean = true;
  isForgotPasswordShown: boolean = false;
  isResetPasswordShown: boolean = false;
  isOtpContentShown: boolean = false;
  isOtpVerified: boolean = false;
  constructor() { }
  ngOnInit(): void {
  }
  goToForgotPassword() {
    this.isLoginContentShown = false;
    this.isForgotPasswordShown = true;
  }
  goToResetPassword() {
    this.isForgotPasswordShown = false;
    this.isResetPasswordShown = true;
  }
  goToOtpVerification() {
    this.isLoginContentShown = false;
    this.isOtpContentShown = true;
  }

  onClickVerify() {
    this.isOtpContentShown = false;
    this.isOtpVerified = true;
  }

  onClickResetPassword() {
    this.isResetPasswordShown = false;
    this.isOtpVerified = true;
  }
}
