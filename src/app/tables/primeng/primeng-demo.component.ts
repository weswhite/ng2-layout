import { Component, OnInit } from '@angular/core';
import {DataTable, Column, Header} from 'primeng/primeng';

export interface Car {
  vin;
  year;
  brand;
  color;
}

@Component({
  selector: 'prime-table',
  directives: [DataTable, Column, Header],
  template: `
    <p-dataTable #dt [value]="cars" [rows]="10" [paginator]="true" [pageLinks]="3" [resizableColumns]="true" [reorderableColumns]="true" [sortMode]="multiple">
      <header>
        <div class="ui-helper-clearfix">
          <button type="button" pButton label="CSV" (click)="dt.exportCSV()" style="float: left">CSV</button>
        </div>
      </header>
      <p-column sortable="true" field="vin" header="Vin"></p-column>
      <p-column sortable="true" field="year" header="Year"></p-column>
      <p-column sortable="true" field="brand" header="Brand"></p-column>
      <p-column sortable="true" field="color" header="Color"></p-column>
    </p-dataTable>
  `
})
export class PrimeTableComponent implements OnInit{
  cars: Car[];
  cols: any[];

  ngOnInit() {
    this.cars =[
      {vin: '12345', year: '1992', brand: 'Chevy', color: 'white'},
      {vin: '67890', year: '1999', brand: 'Mazda', color: 'red'},
      {vin: '12343', year: '2000', brand: 'Chevy', color: 'white'},
      {vin: '42549', year: '2010', brand: 'Ford', color: 'Black'},
      {vin: '12345', year: '1992', brand: 'Chevy', color: 'white'},
      {vin: '67890', year: '1999', brand: 'Mazda', color: 'red'},
      {vin: '12343', year: '2000', brand: 'Chevy', color: 'white'},
      {vin: '42549', year: '2010', brand: 'Ford', color: 'Black'},
      {vin: '12345', year: '1992', brand: 'Chevy', color: 'white'},
      {vin: '67890', year: '1999', brand: 'Mazda', color: 'red'},
      {vin: '12343', year: '2000', brand: 'Chevy', color: 'white'},
      {vin: '42549', year: '2010', brand: 'Ford', color: 'Black'},
      {vin: '12345', year: '1992', brand: 'Chevy', color: 'white'},
      {vin: '67890', year: '1999', brand: 'Mazda', color: 'red'},
      {vin: '12343', year: '2000', brand: 'Chevy', color: 'white'},
      {vin: '42549', year: '2010', brand: 'Ford', color: 'Black'},
      {vin: '12345', year: '1992', brand: 'Chevy', color: 'white'},
      {vin: '67890', year: '1999', brand: 'Mazda', color: 'red'},
      {vin: '12343', year: '2000', brand: 'Chevy', color: 'white'},
      {vin: '42549', year: '2010', brand: 'Ford', color: 'Black'},
      {vin: '12345', year: '1992', brand: 'Chevy', color: 'white'},
      {vin: '67890', year: '1999', brand: 'Mazda', color: 'red'},
      {vin: '12343', year: '2000', brand: 'Chevy', color: 'white'},
      {vin: '42549', year: '2010', brand: 'Ford', color: 'Black'},
      {vin: '12345', year: '1992', brand: 'Chevy', color: 'white'},
      {vin: '67890', year: '1999', brand: 'Mazda', color: 'red'},
      {vin: '12343', year: '2000', brand: 'Chevy', color: 'white'},
      {vin: '42549', year: '2010', brand: 'Ford', color: 'Black'},
      {vin: '12345', year: '1992', brand: 'Chevy', color: 'white'},
      {vin: '67890', year: '1999', brand: 'Mazda', color: 'red'},
      {vin: '12343', year: '2000', brand: 'Chevy', color: 'white'},
      {vin: '42549', year: '2010', brand: 'Ford', color: 'Black'},
    ]

    this.cols = [
      {field: 'vin', header: 'Vin'},
      {field: 'year', header: 'Year'},
      {field: 'brand', header: 'Brand'},
      {field: 'color', header: 'Color'}
    ];
  }

}

