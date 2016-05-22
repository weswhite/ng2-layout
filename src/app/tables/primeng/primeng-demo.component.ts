import { Component, OnInit } from '@angular/core';
import {DataTable, Column} from 'primeng/primeng';

export interface Car {
  vin;
  year;
  brand;
  color;
}

@Component({
  selector: 'prime-table',
  directives: [DataTable, Column],
  template: `
    <p-dataTable [value]="cars">
      <p-column field="vin" header="Vin"></p-column>
      <p-column field="year" header="Year"></p-column>
      <p-column field="brand" header="Brand"></p-column>
      <p-column field="color" header="Color"></p-column>
    </p-dataTable>
  `
})
export class PrimeTableComponent implements OnInit{
  cars: Car[];
  cols: any[];

  ngOnInit() {
    this.cars =[
      {vin: '12345', year: '1992', brand: 'Chevy', color: 'white'},
      {vin: '67890', year: '1992', brand: 'Mazda', color: 'red'}
    ]

    this.cols = [
      {field: 'vin', header: 'Vin'},
      {field: 'year', header: 'Year'},
      {field: 'brand', header: 'Brand'},
      {field: 'color', header: 'Color'}
    ];
  }

}

