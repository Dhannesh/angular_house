import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/service/housing.service';
import { IProperty } from '../iproperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  Properties: Array<IProperty> ;
  SellRent = 1;
  constructor(private housingService: HousingService, private route: ActivatedRoute) {
    this.Properties = []
  }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.Properties = data;
      },error => {
        console.log(error);

      }
    )
  }
}
