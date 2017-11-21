import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  input;
  title = 'app';
  myControl: FormControl;
  jedis = [
    'Luke',
    'Yoda',
    'Darth Vader',
    'Palpatine',
    'Dooku',
    'Darth Maul'
  ];
  filteredJedis$: Observable<string[]>;
  selectedJedi: string;
  propertyOnTheComponent = false;
  nameInput;
  tiles = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  jediSource: Array<Jedi>;
  tableSource: MatTableDataSource<Jedi>;
  displayedColumns: string[];

  ngAfterViewInit() {
    this.tableSource.sort = this.sort;
    this.tableSource.paginator = this.paginator;
  }

  constructor() {
    this.displayedColumns = ['name', 'side'];

    this.jediSource = [{
      name: 'Yoda',
      side: 'Good'
    },
    {
      name: 'Darth',
      side: 'Evil'
    },
    {
      name: 'Palpatine',
      side: 'Evil'
    },
    {
      name: 'Anakin',
      side: 'Good'
    },
    {
      name: 'Mace Windu',
      side: 'Good'
    },
    {
      name: 'Darth Plagueous',
      side: 'Evil'
    }];

    this.tableSource = new MatTableDataSource<Jedi>(this.jediSource);


    this.nameInput = new FormControl('', [
      Validators.required
    ]);

    this.input = new FormControl();
    this.myControl = new FormControl();
    this.filteredJedis$ = this.myControl
      .valueChanges
      .map(input => this.filter(input));

  }

  filter(key: string): Array<string> {
    return this.jedis.filter(j => j.startsWith(key));
  }
}

export interface Jedi {
  name: string;
  side: string;
}

