import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) { }

  searchForCapturedImage(image) {

    let promise = new Promise((resolve, reject) => {
        this.httpClient.post(`/recognize`, image)
          .toPromise()
          .then(
            res => { // Success
              console.log(res);
              resolve(res);
            }
          );
    });
    return promise;

    //return this.httpClient.post(`${this.API_URL}/search/`, image);
  }

  storeImageForTraining(image,name) {

    let json={"base64InputImage":image,
              "personName":name}

    let promise = new Promise((resolve, reject) => {
   
        this.httpClient.post(`/add-face`, json)
          .toPromise()
          .then(
            res => { // Success
              console.log(res);
              resolve(res);
            }
          )
    });
    return promise;

    //return this.httpClient.post(`${this.API_URL}/search/`, image);
  }

  askName(name){
    
     return this.httpClient.post(`http://localhost:9090/train/askName/`, name);
        
  return ;

  }

}


