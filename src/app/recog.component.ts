import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from './api.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'recog-root',
  templateUrl: './recog.component.html',
  styleUrls: ['./app.component.css']
}) 
export class RecogComponent implements OnInit {

  public ngOnInit() { }
  private _destroy$ = new Subject();
  ngOnDestroy() {
    this._destroy$.next();
  }

  @ViewChild('video')
  public video: ElementRef;

  @ViewChild('canvas')
  public canvas: ElementRef;
  
  public person_name: String;

  public recognised=false;
  public recognising=true;
 
  // public captures: Array<any>;
  
  public constructor(private apiService: ApiService,private router: Router) {
    // this.captures = [];
  }

  

  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
        setTimeout(2000);
        this.captureAndSearch();

      });

      // var jsonresp;
      // do{
      // jsonresp=await this.capture();
      // }while(jsonresp['resp_code']!='FR');


    }


  }


  public async captureAndSearch() {
    let response = null;
    console.log(this.canvas.nativeElement.getContext('2d'));
    do {
      this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0, 640, 480);
      response = await this.apiService.searchForCapturedImage(this.canvas.nativeElement.toDataURL('image/png'));
      console.log('in capture response ::');
    } while (response.resp_code !== 'FR' && response.resp_code !== 'NR')

    this.person_name = response.person;
    this.recognising=false;
    if(response.resp_code === 'FR') {
      this.recognised=true;
    }
    if(response.resp_code === 'NR') {
      this.recognised=false;
    }

    
  }

  public goTrain(){
    console.log("in go train-----------------------------------");
    this.router.navigate(['askname']);
  }


}
