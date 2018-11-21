import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from './api.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'train-root',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

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
  public captures: Array<any>;

  public constructor(private apiService: ApiService) {
    this.captures = [];
  }

  

  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();

      });

      // var jsonresp;
      // do{
      // jsonresp=await this.capture();
      // }while(jsonresp['resp_code']!='FR');


    }


  }


  public async captureAndStore() {
    let response = null;
    console.log(this.canvas.nativeElement.getContext('2d'));
    do {
      this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0, 640, 480);
      this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
     // response = await this.apiService.storeImageForTraining(this.canvas.nativeElement.toDataURL('image/png'));
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



}
