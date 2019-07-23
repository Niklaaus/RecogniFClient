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

  @ViewChild('video', { static: true })
  public video: ElementRef;

  @ViewChild('canvas', { static: true })
  public canvas: ElementRef;
  
  public person_name: String;

  public recognising=true;

  public recognised=false;
  public celebrity_recognised=false;
  public not_really_recognised=false;
  public celebrity_not_really_recognised=false;
 
  // public captures: Array<any>;
  
  public constructor(private apiService: ApiService,private router: Router) {
    // this.captures = [];
  }

  

  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
        //setTimeout(2000);
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
      console.log('in capture response ::'+ response.resp_code);
    } while (response.resp_code === 'NF')

    this.person_name = response.person;
    this.recognising=false;
    if(response.resp_code === 'FR') {
      this.recognised=true;
    }
    else if(response.resp_code === 'NR') {
      this.not_really_recognised=true;
    }
    else if (response.resp_code === 'CelebFR' ){
      this.celebrity_recognised=true;
    
    } else if(response.resp_code==='CelebNR'){
      this.celebrity_not_really_recognised=true;
    }

    
  }

  public goTrain(){
    console.log("in go train-----------------------------------");
    this.router.navigate(['askname']);
  }


}
