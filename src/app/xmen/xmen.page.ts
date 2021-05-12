import { Component, OnInit } from '@angular/core';
import{XmenService} from '../Services/xmen.service'
@Component({
  selector: 'app-xmen',
  templateUrl: './xmen.page.html',
  styleUrls: ['./xmen.page.scss'],
})
// gets x-men movie data
export class XmenPage implements OnInit {
  xmenData:any[];
  constructor(private xmenService:XmenService) { }

  ngOnInit() {
    this.xmenService.GetXmenData().subscribe(
    (data)=>{

    this.xmenData = data.Search;
    console.log(this.xmenData);


    }


    );
  }

}
