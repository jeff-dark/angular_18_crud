export class EmployeeModel {
    empId: number;
    empName: string;
    empCity: string;
    empState: string;
    empEmail: string;
    empPhone: string;
    empAddress: string;
    empPinCode?: number;

    constructor(empId: number, empName: string, empEmail: string, empPhone: string, empCity: string, empState: string, empAddress: string, empPinCode?: number) {
        this.empId = 0;
        this.empName = empName;
        this.empEmail = empEmail;
        this.empPhone = empPhone;
        this.empCity = empCity;
        this.empState = empState;
        this.empAddress = empAddress;
        this.empPinCode = empPinCode;
    }
}