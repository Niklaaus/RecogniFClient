import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { SharedService } from './shareddataservice';



@Component({
  selector: 'askname-root',
  templateUrl: './askname.component.html',
  styleUrls: ['./app.component.css']
})
export class AsknameComponent implements OnInit {

  public message:String;

  public ngOnInit() { }

  ngOnDestroy() {

  }



  public constructor(private apiService: ApiService, private router: Router, private dataservice: SharedService) {

  }



  public ngAfterViewInit() { }


  public stateName(uname) {
    console.log(uname);

    this.dataservice.saveName(uname);

    let storeCreated = this.apiService.askName(uname);

    storeCreated.subscribe(res => { 
      console.log("Store created successfully")
      this.router.navigate(['train']);
    },
      err => { 
        this.message=err.error.message;
        
      })


    
  }


}
