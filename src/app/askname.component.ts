import { Component, OnInit} from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import {SharedService} from './shareddataservice';



@Component({
  selector: 'askname-root',
  templateUrl: './askname.component.html',
  styleUrls: ['./app.component.css']
})
export class AsknameComponent implements OnInit {


  public ngOnInit() { }

  ngOnDestroy() {

  }



  public constructor(private apiService: ApiService, private router: Router, private dataservice:SharedService) {

  }



  public ngAfterViewInit() { }


  public stateName(uname) {
    console.log(uname);

    this.dataservice.saveName(uname);
    
    this.router.navigate(['train']);
  }


}
