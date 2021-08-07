import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Ipropertybase } from 'src/app/model/ipropertybase';



@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm!: NgForm;
  @ViewChild('formTabs') formTabs!: TabsetComponent;



  propertyType: Array<string> = ['House','Apartment','Duplex'];
  furnishType: Array<string> = ['Fully','Semi','UnFurnished'];

  propertyView: Ipropertybase ={
    Id: null!,
    Name: null!,
    Price: null!,
    SellRent: null!,
    PType: null!,
    FType:null!,
    BHK:null!,
    BuiltArea:null!,
    City:null!,
    RTM:null!



  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBack(){
    this.router.navigate(['/']);
  }
  onSubmit(){
    console.log(this.addPropertyForm);

  }
  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}
