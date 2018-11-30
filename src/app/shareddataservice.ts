import {Injectable} from '@angular/core';

// Name Service
// export interface nameIntf {
//    name:string;
// }


@Injectable()
export class SharedService {
    constructor(){}
private uname:String;
//   sharingData: nameIntf={name:"nyks"};
  public saveName(str){
    //console.log('save name function called ' + str);
    this.uname=str; 
  }
  public getName() : String
  {
   // console.log('get data function called');
    return this.uname;
  }
} 