import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, EmployeeItem } from './employ.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'https://localhost:7050/api/Employee';

  constructor(private http: HttpClient) {}

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  getEmployees(): Observable<Employee[]> {
    // return this.http.get<Employee[]>(this.apiUrl);
    return of(EmployeeItem);
  }

  getEmployeeById(empId: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${empId}`);
  }

  updateEmployee(empId: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/${empId}`, employee);
  }

  deleteEmployee(empId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${empId}`);
  }

  deleteEmployeeById(empId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${empId}`);
  }
}
