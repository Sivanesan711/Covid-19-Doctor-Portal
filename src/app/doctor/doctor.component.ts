import { Component, OnInit } from '@angular/core';
import { userContact } from '../userContact';
import { contacts } from '../contact';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  contacts: userContact[];
  newContact: any = {};

  constructor() { }

  ngOnInit(): void {
    this.contacts = contacts;
  }

  addContact(newContact): any {
    console.log('Add contact has been called');
    this.contacts.unshift(newContact);
    alert('NEW DETAIL ADDED;D');
  }

}
