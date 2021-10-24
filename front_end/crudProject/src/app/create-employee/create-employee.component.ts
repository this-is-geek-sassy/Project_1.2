import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private emplser: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.employee);
    this.emplser.createEmployee(this.employee).subscribe(data => {
      alert(data);
    }, error => console.log(error));
    this.router.navigate(['/employees']);
  }

}
