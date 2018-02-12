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
  motCle:string="";
  page:number=0;
  size:number=1;
  constructor(private http:Http,public contactsservice:contactsService) { }

  ngOnInit() {
 }
doSearch(){
  this.contactsservice.getContacts(this.motCle,this.page,this.size)
  .subscribe(data=>{
    this.pageContacts=data;
  }, err=>{
    console.log(err);
  }
  )
}  
chercher(){
this.doSearch();
}
}


