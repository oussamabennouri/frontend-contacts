import { Component, OnInit } from '@angular/core';
import { contactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public contactService:contactsService) { }

  ngOnInit() {
  }
  onSaveContact(dataForm){
    this.contactService.saveContacts(dataForm)
    .subscribe(data=>{
    console.log(data)
    }, err=>{
      console.log(err);
    }
    )

  }
}
