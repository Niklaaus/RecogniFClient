import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from './api.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent implements OnInit {

  public ngOnInit() { }
  private _destroy$ = new Subject();
  ngOnDestroy() {
    this._destroy$.next();
  }

  
  public constructor(private router: Router) {

  }

  

  public ngAfterViewInit() {
    this.router.navigate(['recog']);
  } 

}
