import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  emp: Employee = new Employee();
  id!: number;
  constructor(private employee_serv: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employee_serv.getEmployeeById(this.id).subscribe(data => {
      this.emp = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.employee_serv.updateEmployeeById(this.id, this.emp).subscribe(message => {
      alert(message);
      this.router.navigate(['/employees']);
    })
  }
  
}
