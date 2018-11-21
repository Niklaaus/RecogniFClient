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
      setTimeout(()=>{
        this.httpClient.post(`${this.API_URL}/search/`, image)
          .toPromise()
          .then(
            res => { // Success
              console.log(res);
              resolve(res);
            }
          )}, 5000);
    });
    return promise;

    //return this.httpClient.post(`${this.API_URL}/search/`, image);
  }

  storeImageForTraining(image,name) {

    let json={"image":image,
              "name":name}

    let promise = new Promise((resolve, reject) => {
   
        this.httpClient.post(`http://localhost:9090/train/capture/`, json)
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
    
    let promise = new Promise((resolve, reject) => {
   
      this.httpClient.post(`http://localhost:9090/train/askName/`, name)
        .toPromise()
        .then(
          res => { // Success
            console.log(res);
            resolve(res);
          }
        )
  });
  return promise;

  }

}


