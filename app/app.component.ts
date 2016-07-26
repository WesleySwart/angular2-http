import { Component } from '@angular/core';
//import {HTTP_PROVIDERS} from '@angular/http';
import {HttpService} from './http.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <p>{{description}}</p>
    <!-- JSON Test Services -->
    <div class='jsontest'>
    <button (click)="getIPAddress()">Get IP</button>
    <p>{{getIP}}</p>
    </div>
  `,
  providers: [HttpService]
})

export class AppComponent { 
  getIP : string;
  error: any;

  constructor(private httpService: HttpService){}

  title = 'Angular 2 Http';
  description = 'Make service calls to json test and display response.';
  
  getIPAddress(){
    this.httpService.getIPAddress()
    .subscribe(
      data => this.getIP = JSON.stringify(data),
      error => console.log("Error HTTP GET"),
      () => console.log("GET Done")
      );
  }
}
