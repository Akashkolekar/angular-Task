import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SbookserviceService {

  constructor(private http: HttpClient) { }

  createData(data: any) {
    return this.http.post('http://localhost:3000/sbook', data);
  }
  getData() {
    return this.http.get('http://localhost:3000/sbook');
  }
}
