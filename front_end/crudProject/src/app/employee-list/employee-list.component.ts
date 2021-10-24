import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList!: Array<Employee>;

  constructor(private employee_service: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employeeList = [
      {
        "id": 1,
        "firstName": 'Ramesh',
        "lastName": 'Dubey',
        "emailId": 'ramesh.5star@cadbury.com'
      },
      {
        "id": 2,
        "firstName": 'Suresh',
        "lastName": 'Dubey',
        "emailId": 'suresh.5star@cadbury.com'
      }
    ]
    this.employee_service.getEmployeeList().subscribe(employees => {
      this.employeeList = employees;
    })
  }

  onUpdate(id:number) {
    this.router.navigate(['/update-employee', id]);
  }

}
