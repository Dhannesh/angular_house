import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { IProperty } from '../property/iproperty';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent: number) : Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map((data) => {
        const jsonData = JSON.stringify(data);
        const propertyArray:Array<IProperty> = JSON.parse(jsonData);
        return propertyArray .filter((item:IProperty)=>item.SellRent === SellRent)
      })
    );
  }
}
