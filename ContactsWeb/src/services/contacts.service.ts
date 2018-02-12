import { Injectable } from "@angular/core";
import { Http } from "@angular/http";


@Injectable()
export class contactsService{
constructor(public http:Http){

}
getContacts(motCle:string,page:number,size:number){
    return this.http.get("http://localhost:8080/fetch_contact?mc="+motCle+"&size="+size+"&page="+page)
    .map(resp=>resp.json());
}
}