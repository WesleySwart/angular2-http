import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import {Headers, Http, Response} from '@angular/http';
//import {JsonTest} from './jsontest';

@Injectable()
export class HttpService{
    constructor(private http:Http){}

    private httpUrl = 'http://ip.jsontest.com/'
    private handleError(error: Response){
        console.error(error); // log to console instead
        return Observable.throw(error);
    }

    //Get IP address
    getIPAddress(){
        return this.http.get(this.httpUrl)
        .map(response => response.json())
        .catch(this.handleError);
    }
}