import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dataSource = CONTACT;
  columnsToDisplay = ['contactname', 'contact_agency'];
  /*expandedElement: PeriodicElement | null;*/

}
const CONTACT: dataContact[]=[
  {
    contactname: 'Marco Magnetti',
    contactagency: 'marcomagnetti@gmail.com',
    taxcode: 'TAXCODE',
    address: 'ADDRESS',
    tel: '+593963590104',
    email: 'mail@mail.com'
  },
  {
    contactname: 'Andres Torres',
    contactagency: 'magoyde@gmail.com',
    taxcode: 'TAXCODE',
    address: 'ADDRESS',
    tel: '+593963590104',
    email: 'mail@mail.com'
  }
]

export interface dataContact {
  contactname: string;
  contactagency: string;
  taxcode: string;
  address: string;
  tel: string;
  email: string;
}