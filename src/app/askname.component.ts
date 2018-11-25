import { Component, OnInit, Output,EventEmitter,Input} from '@angular/core';
import { ApiService } from './api.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'askname-root',
  templateUrl: './askname.component.html',
  styleUrls: ['./app.component.css']
})
export class AsknameComponent implements OnInit {
public uname:String;

  public ngOnInit() { }

  ngOnDestroy() {

  }



  @Input() result: string = "";
  @Output() clicked = new EventEmitter<string>();
  public constructor(private apiService: ApiService, private router: Router) {

  }



  public ngAfterViewInit() { }


  public stateName(uname) {

    this.uname=uname;
    console.log(uname);
    this.router.navigate(['train']);
  }


}
