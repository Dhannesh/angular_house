import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Ipropertybase } from '../model/ipropertybase';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent: number) : Observable<Ipropertybase[]>{
    return this.http.get('data/properties.json').pipe(
      map((data) => {
        const jsonData = JSON.stringify(data);
        const propertyArray:Array<Ipropertybase> = JSON.parse(jsonData);
        return propertyArray .filter((item:Ipropertybase)=>item.SellRent === SellRent)
      })
    );
  }
}
