import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import { Country } from './country';

@Injectable()
export class AppService {

    constructor(private http: Http) {

    }

    Refresh(): Promise<Country[]> {
        return this.http.get("https://restcountries.eu/rest/v1/all")
            .toPromise()
            .then(response =>
                response.json() as Country[]
            );

    }
}