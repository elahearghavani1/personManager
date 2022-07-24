import { PersonService } from './../../../services/person.service';
import { Component,Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
})
export class ConfirmModalComponent {

  @Input() currentId: any;
  constructor(private data:PersonService,public modal:ModalService) { }


  onDelete(modal: any) {
    this.data.delete(this.currentId);
    modal.close();
  }
}
