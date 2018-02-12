import { Injectable } from "@angular/core";
import { Http } from "@angular/http";


@Injectable()
export class contactsService{
constructor(public http:Http){

}
getContacts(){
    return this.http.get("http://localhost:8080/fetch_contact?mc=oussama&size=5")
    .map(resp=>resp.json());
}
}