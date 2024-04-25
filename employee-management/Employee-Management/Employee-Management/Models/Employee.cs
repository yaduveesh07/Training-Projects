using System;
using System.ComponentModel.DataAnnotations;

namespace Employee_Management.Models
{
  public class Employee
  {
    [Key]
    public int EmpId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string PhoneNo { get; set; }
    public decimal Salary { get; set; }
    public DateTimeOffset Dob { get; set; }
    public DateTimeOffset JoiningDate { get; set; }
    public int DepartmentId { get; set; }
    public string Address { get; set; }
    public bool IsDeleted { get; set; }
  }
}
