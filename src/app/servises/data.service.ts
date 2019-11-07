import { Contact } from './../models/Contact';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // state definition
private state:boolean;
private stateSorce = new BehaviorSubject(this.state);
currentState = this.stateSorce.asObservable();
// contact defintion
private contact:Contact;
private contactSorce = new BehaviorSubject(this.contact);
currentContact = this.stateSorce.asObservable();

  constructor() { }


public changeState(state:boolean):void{

  this.stateSorce.next(state);
}

public sendNew(contact:Contact){
this.contactSorce.next(contact);
}

}
