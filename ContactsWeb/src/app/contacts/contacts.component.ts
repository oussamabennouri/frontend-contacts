import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http"
import "rxjs/add/operator/map";
import { contactsService } from '../../services/contacts.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts:any;
  motCle:string="";
  currentpage:number=1;
  size:number=5;
  pages:Array<number>;
  constructor(private http:Http,public contactsservice:contactsService,public router:Router) { }

  ngOnInit() {
 }
doSearch(){
  this.contactsservice.getContacts(this.motCle,this.currentpage,this.size)
  .subscribe(data=>{
    this.pageContacts=data;
    this.pages=new Array(data.totalPages);
  }, err=>{
    console.log(err);
  }
  )
}  
chercher(){
this.doSearch();
}
gotoPage(i:number){
  this.currentpage=i;
  this.doSearch();
}
onEditContact(id:number){
this.router.navigate(['editContact',id])
}
}


