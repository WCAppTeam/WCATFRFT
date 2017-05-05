import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GridService{
    http:any;
    baseUrl: String;


    constructor(http:Http){
        this.http = http;
        this.baseUrl = 'http://api.rovicorp.com/TVlistings/v9/listings/services/postalcode/30045/info?locale=en-US&countrycode=US&format=json&apikey=mrt3h6ne57ww7n6vs64xdhnx'
    }

    // getServiceId(postalcode,apikey){
    //     return this.http.get();
    // }

    getServiceId(){
        return this.http.get(this.baseUrl)
            .map(res => res.json());
    }

}
