import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { userContact } from '../userContact';
import { contacts } from './../contact';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  contacts: userContact[];
  newContact: any = {};

  constructor() { }

  ngOnInit(): void {
    this.contacts = contacts;
  }

}
