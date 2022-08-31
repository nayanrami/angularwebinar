import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  constructor() {}
  mydata: any = {};

  ngOnInit(): void {}
  getFormData(data: NgForm) {
    this.mydata = data;
  }
}
