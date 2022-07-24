import { Component, OnInit,Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import {  FormGroup } from "@angular/forms";
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './person-modal.component.html',
})
  
  
export class FormModalComponent implements OnInit {

  @Input() currentId: any;
  person!: FormGroup;
  constructor(public modal: ModalService, public data: PersonService) { 
  }
  
  ngOnInit() {
    this.person = this.data.person;
  }

  onSubmit(modal: any) {
    if (this.data.isUpdate) {
      this.onUpdate();
    }
    else {
      this.onCreate();
    }
    modal.close();
  }

  onCreate() {
    let item = this.person.value;
    this.data.create(item);
  }

  onUpdate() {
    let item = this.data.data$[this.currentId];
    let newItem = this.person.value;
    newItem.Id = this.currentId;
    this.data.update(newItem);
  }

  resetForm() {
    this.data.isUpdate = false;
    this.data.clearItem();
  }

}
