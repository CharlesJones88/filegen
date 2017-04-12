import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FileGenService {
    private fileGenUrl = 'api/genfile';
    constructor(private http: Http) {}
    generateFile(data) : Observable<string> {
        return this.http.post(this.fileGenUrl, data)
                        .map(this.extract)
                        .catch(this.handleError);
    }
    private extract(res: Response) {
        let body = res.json();
        return body.message || '';
    }
    private handleError(error: Response | any, caught: Observable<any>) : Observable<any> {
        let errMsg: string;
        if(error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }
}