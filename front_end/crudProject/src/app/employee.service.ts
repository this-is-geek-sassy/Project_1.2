import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // listOfEmployees!: Array<Employee>;
  private url = "http://localhost:8080/";
  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Array<Employee>> {
    // Ajax call
    return this.httpClient.get<Employee[]>(this.url);
  }

  createEmployee(e: Employee): Observable<any> {
    return this.httpClient.post(this.url, e);
  }
}
