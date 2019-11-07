import { Component, OnInit } from '@angular/core';
import { DataService } from '../servises/data.service';
import { Contact } from '../models/Contact';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public contact:Contact;

  public creating = false;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.currentState.subscribe(state=> this.creating = state);
    this.contact = new Contact();
    this.dataService.currentContact.subscribe (c =>   this.contact =c )
  }

  public create(){
    this.dataService.sendNew(this.contact);
  }

}
