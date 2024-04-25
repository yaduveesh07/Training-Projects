using Microsoft.EntityFrameworkCore;
using Employee_crud_operation_api.Models;
using System.Data.Entity;

namespace Employee_crud_operation_api.Data
{
    
    public class EmployeeRepository
    {
        private readonly EmployeeContext _context;

        public EmployeeRepository(EmployeeContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Employee>> GetAllEmployeesAsync()
        {
            return await _context.Employee_tbl.ToListAsync();
        }

        public async Task<Employee> GetEmployeeByIdAsync(int EmpId)
        {
            return await _context.Employee_tbl.FindAsync(EmpId);
        }

        public async Task AddEmployeeAsync(Employee employee)
        {
            await _context.Set<Employee>().AddAsync(employee);
            await _context.SaveChangesAsync();
        }

        //public async Task<Employee> CreateEmployee(Employee employee)
        //{
           // _context.Emp_tbl.Add(employee);
          //  await _context.SaveChangesAsync();
           // return employee;
        //}

        public async Task UpdateEmployee(int EmpId, Employee model)
        {
            var employees = await _context.Employee_tbl.FindAsync(EmpId);
            if(employees == null)
            {
                throw new Exception("Employee not found");
            }
            employees.FirstName = model.FirstName;  
            employees.LastName = model.LastName;
            employees.Email = model.Email;
            employees.JoiningDate = model.JoiningDate;
            employees.Address = model.Address;
            employees.DepartmentId = model.DepartmentId;
            employees.PhoneNo = model.PhoneNo;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteEmployeeById(int EmpId) // Corrected method signature
        {
            var employees = await _context.Employee_tbl.FindAsync(EmpId);
            if (employees == null)
            {
                throw new Exception ($"{EmpId} not found");
            }
            _context.Employee_tbl.Remove(employees);
            await _context.SaveChangesAsync();
        }

    }

}
