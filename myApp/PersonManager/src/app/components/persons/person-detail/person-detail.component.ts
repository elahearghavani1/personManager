import { PersonService } from 'src/app/services/person.service';
import { Component,OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class DetailComponent implements OnInit  {

  id: any = this.route.snapshot.paramMap.get('id');
  item: any;
  
  constructor(private titleService:Title,private route: ActivatedRoute,private data: PersonService) {  
  }

  ngOnInit() {
    this.titleService.setTitle("اطلاعات شخصی");
    this.data.get(this.id).subscribe((ret: any) => {
      this.item = ret;
    });
  }
}
