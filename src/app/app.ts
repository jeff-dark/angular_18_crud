import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeModel } from './model/Employee';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  employeeForm: FormGroup = new FormGroup({});
  employeeobj: EmployeeModel  = new EmployeeModel(0, '', '', '', '', '', '');
  employeeList: EmployeeModel[] = [];

  constructor() {
    this.createForm();
    debugger;
    const oldData = localStorage.getItem('empData');
    if(oldData != null) {
      const parseData = JSON.parse(oldData);
      this.employeeList = parseData;
    }
  }


  createForm() {
    this.employeeForm = new FormGroup({
      empid: new FormControl(this.employeeobj.empId),
      empname: new FormControl(this.employeeobj.empName),
      empemail: new FormControl(this.employeeobj.empEmail),
      empphone: new FormControl(this.employeeobj.empPhone),
      empcity: new FormControl(this.employeeobj.empCity),
      empstate: new FormControl(this.employeeobj.empState),
      empaddress: new FormControl(this.employeeobj.empAddress),
      emppincode: new FormControl(this.employeeobj.empPinCode)

    })
  }

  onSave() {
    debugger;
    const oldData = localStorage.getItem('empData');
    if(oldData != null) {
      const parseData = JSON.parse(oldData);
      this.employeeForm.controls['empid'].setValue(parseData.length + 1);
      this.employeeList.unshift(this.employeeForm.value);
    } else {
      this.employeeForm.controls['empid'].setValue(1);
      this.employeeList.unshift(this.employeeForm.value);
    }
  }
}
