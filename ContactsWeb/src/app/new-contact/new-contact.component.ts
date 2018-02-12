import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/model.contact';
import { contactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
contact:Contact=new Contact();
mode:number=1;
  constructor(public contactService: contactsService) { }

  ngOnInit() {
  }
  saveContact(){
    console.log(this.contact)
    this.contactService.saveContacts(this.contact)
    .subscribe(data=>{
      this.contact=data;
    this.mode=2;
    }, err=>{
      console.log(err);
    }
    )
  }
}
