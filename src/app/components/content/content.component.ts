import { Component, OnInit } from '@angular/core';
import { ConatctServiceService } from 'src/app/servises/conatct-service.service';
import { HttpClient } from '@angular/common/http';
import { Router, OutletContext } from '@angular/router';
import { Contact } from 'src/app/models/Contact';
import { DataService } from 'src/app/servises/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public contacts:Contact[];
  public contact:Contact;
  public create:boolean = false;
  public update:boolean= false;

  public newContact:Contact;

  constructor(private contactService :ConatctServiceService,
    private router:Router, private dataService:DataService) { }


  ngOnInit(){
   this.getAllContacts();
   this.newContact = new Contact();
   this.dataService.currentContact.subscribe(contact => this.createContact(contact));

  }

  public createBt():void{
   if(this.create){
    this.create = false;
    this.dataService.changeState(this.create);

   }else{
     this.create = true;
     this.dataService.changeState(this.create);
   }
  }

    public updateBt():void{
    if(this.update){
      this.update =false;
      this.dataService.changeState(this.update);
    }
    else{
    this.update = true;
    this.dataService.changeState(this.update);
  }
   }



  public edit(){
    this.newContact.id = 0;
    this.createContact(this.newContact);
  }

  public remove(id: number): void{
    this.removeContact(id);
  }

  public getAllContacts(){

    this.contactService.getAllContacts()
    .subscribe(contacts => this.contacts = contacts),
      error => alert(error.message);
    }

    public removeContact(id:number){
      this.contactService.removeContact(id)
      .subscribe(text=>alert(text)),
      err => alert(err.message);
    }
    public getContaById(id:number){
      this.contactService.getContact(id)
      .subscribe(contact => this.contact = contact),
      err=> alert(err.message);
    }

    private createContact(contact:Contact) {
      this.contactService.addContact(contact)
      .subscribe(text => alert(text)),
      err=> alert(err.message);
    }

    private updateContact(contact:Contact) {
      this.contactService.updateContact(contact)
      .subscribe(text => alert(text)),
      err=> alert(err.message);
    }



}
