import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
  
export class PersonsComponent implements OnInit  {

  currentId: number = 0;
  person!: FormGroup;
  persons:any=[];
  ngOnInit() {
    this.persons = this.data.data$;
  }
  
  constructor(public data: PersonService, public modal: NgbModal) { 
  }
  
  onFetch(index: number, modal: any) {
    this.data.isUpdate = true;
    this.currentId = index;
    this.data.fetchItem(this.currentId);
    this.modal.open(modal);
  } 

  onConfirm(index: number, modal: any) {
    this.modal.open(modal);
    this.currentId = index;     
  }

  onCreate(modal: any) {
    this.data.isUpdate = false;
    this.data.clearItem();
    this.modal.open(modal);
  }
  
}
