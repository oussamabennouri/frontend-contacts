import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http"
import "rxjs/add/operator/map";
import { contactsService } from '../../services/contacts.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts:any;
  constructor(private http:Http,public contactsservice:contactsService) { }

  ngOnInit() {
 this.contactsservice.getContacts()
 .subscribe(data=>{
   this.pageContacts=data;
 }, err=>{
   console.log(err);
 }
 )} 

}


