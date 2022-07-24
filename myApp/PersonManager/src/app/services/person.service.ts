import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { NotificationService } from './notification.service';

@Injectable()
export class PersonService {
  baseUrl = "http://localhost:5000/Person/";
  private _data: any = new BehaviorSubject(this.getAll());
  public readonly data$ = this._data.asObservable();
  isUpdate: boolean=false;
  person = new FormGroup({
    'Id':new FormControl(''),
    'Name': new FormControl('', [Validators.required]),
    'LastName': new FormControl([], [Validators.required]),
    'Email': new FormControl([], [Validators.required, Validators.email]),
    'Phone': new FormControl([], [Validators.required]),
      'NationalCode': new FormControl([], [Validators.required]),
  }); 
  constructor(private httpClient: HttpClient,private notifyService : NotificationService) {
  }
  public get(index: number) {
    return this.httpClient.get(this.baseUrl+'Read/'+index); 
  }
  public getAll() {
   return this.httpClient.get(this.baseUrl+"GetAll").subscribe(ret=>this._data.next(ret));
  }
  public fetchItem(index: number) {
    this.httpClient.get(this.baseUrl + 'Read/' + index).subscribe((ret: any) => {
     this.person.setValue(ret)
    }); 
    
  }
  public create(item: any) {
    item.Id=0;
    this.httpClient.post(this.baseUrl+'Create', item,{
         observe: 'response'
      }).subscribe(response => {
        if (response.status == 200) {
          this.notifyService.showSuccess("درج اطلاعات با موفقیت انجام شد", "");
          this.syncList();
        } else
        {
          this.notifyService.showError("خطایی رخ داده است", "");  
        }
        
    });
  }
  public update(item: any) {
    this.httpClient.patch(this.baseUrl + 'Update/', item, {
      observe: 'response'
    }).subscribe(response => {
      if (response.status == 200) {
        this.notifyService.showSuccess("ویرایش اطلاعات با موفقیت انجام شد", "");
          this.syncList();
      }
      else {
        this.notifyService.showError("خطایی رخ داده است", "");
      }
    });
  }
  public delete(index: number) {
     this.httpClient.delete(this.baseUrl + 'Delete/' + index,{
         observe: 'response'
      })
        .subscribe(response => {
        if (response.status == 200) {
          this.notifyService.showSuccess("حذف اطلاعات با موفقیت انجام شد", "");
          this.syncList();
        }
        else
        {   
          this.notifyService.showError("خطایی رخ داده است", "");
        }
    });
  }
  public clearItem() {
    this.person.reset();
  }
  public syncList() {
    this._data.next({ data: this.getAll()});
  }
 }
