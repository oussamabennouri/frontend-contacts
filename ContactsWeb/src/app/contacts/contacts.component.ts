import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http"
import "rxjs/add/operator/map";
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts:any;
  constructor(private http:Http) { }

  ngOnInit() {
  this.http.get(url:"http://localhost:8080//fetch_contact?mc=oussama&size=5")
  .map(res=>res.json())
  .subscribe(next: data=>{
this.pageContacts=data;
            },
error:err=>{
  console.log(err);

  })
}

}
