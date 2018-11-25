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

  public recognised = false;
  public recognising = true;
  public captures: Array<any>;
  public tname: String;

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
    console.log("\n name is " + this.tname);
    this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0, 640, 480);
    let imagestr = this.canvas.nativeElement.toDataURL("image/png");
    this.captures.push(imagestr);
    // response = await this.apiService.storeImageForTraining(this.canvas.nativeElement.toDataURL('image/png'),this.tname);  
    // response = await this.apiService.storeImageForTraining(imagestr,this.tname);

  }



}
