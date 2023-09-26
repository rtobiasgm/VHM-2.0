import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerRegistrationRequest } from '../models/requests/customer-registration-request';
import { CustomerDto } from '../models/responses/customer-dto';
import { CustomerUpdateRequest } from '../models/requests/customer-update-request';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private httpClient: HttpClient){}

  getCustomers() : Observable<any>{
    return this.httpClient.get(`${environment.apiUrl}/Customer`)
  }

  addCustomer(customerRequest: CustomerRegistrationRequest) {
    return this.httpClient.post<any>(`${environment.apiUrl}/Customer`,customerRequest);
  } 

  updateCustomer(id: number, customerRequest: CustomerUpdateRequest){
   return this.httpClient.put<CustomerUpdateRequest>(`${environment.apiUrl}/Customer/${id}`, customerRequest);
  } 

  deleteCustomer(id: number){
    return this.httpClient.delete<any>(`${environment.apiUrl}/Customer/${id}`);
  }


}
