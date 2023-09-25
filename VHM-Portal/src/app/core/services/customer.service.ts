import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private httpClient: HttpClient){}

  getCustomers() : Observable<any>{
    return this.httpClient.get(`${environment.apiUrl}/Customer`)
  }

  


}
