using Employee_Management.Models;
using Microsoft.EntityFrameworkCore;

namespace Employee_Management.data
{
  public class EmployeeRepository
  {
    private readonly EmployeeDbContext _employeeDbContext;

    public EmployeeRepository(EmployeeDbContext employeeDbContext)
    {
      _employeeDbContext = employeeDbContext;
    }

    public async Task AddEmployeeAsync(Employee employee)
    {
      await _employeeDbContext.Set<Employee>().AddAsync(employee);
      await _employeeDbContext.SaveChangesAsync();
    }

    public async Task<List<Employee>> GetAllEmployeeAsync()
    {
      return await _employeeDbContext.Employee_tbl.ToListAsync();
    }

    public async Task<Employee> GetEmployeeById(int EmpId)
    {
      return await _employeeDbContext.Employee_tbl.FindAsync(EmpId);
    }

    public async Task UpdateEmployee(int EmpId, Employee model)
    {
      var employees = await _employeeDbContext.Employee_tbl.FindAsync(EmpId);
      if (employees == null)
      {
        throw new Exception("Employee not found");
      }
      employees.EmpId = model.EmpId;
      employees.FirstName = model.FirstName;
      employees.LastName = model.LastName;
      employees.Email = model.Email;
      employees.JoiningDate = model.JoiningDate;
      employees.Address = model.Address;
      employees.DepartmentId = model.DepartmentId;
      employees.PhoneNo = model.PhoneNo;
      employees.Dob = model.Dob;
      employees.Salary = model.Salary;
      employees.IsDeleted = model.IsDeleted;
      await _employeeDbContext.SaveChangesAsync();
    }

    public async Task DeleteEmployeeById(int EmpId)
    {
      var employees = await _employeeDbContext.Employee_tbl.FindAsync(EmpId);
      if (employees == null)
      {
        throw new Exception($"{EmpId} not found");
      }
      _employeeDbContext.Employee_tbl.Remove(employees);
      await _employeeDbContext.SaveChangesAsync();
    }
  }
}
