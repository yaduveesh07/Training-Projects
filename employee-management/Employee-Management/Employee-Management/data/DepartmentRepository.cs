using Employee_Management.Models;
using Microsoft.EntityFrameworkCore;

namespace Department_Management.data
{
  public class DepartmentRepository
  {
    private readonly EmployeeDbContext _departmentDbContext;

    public DepartmentRepository(EmployeeDbContext departmentDbContext)
    {
      _departmentDbContext = departmentDbContext;
    }

    public async Task AddDepartmentAsync(Department department)
    {
      await _departmentDbContext.Set<Department>().AddAsync(department);
      await _departmentDbContext.SaveChangesAsync();
    }

    public async Task<List<Department>> GetAllDepartmentAsync()
    {
      return await _departmentDbContext.Department_tbl.ToListAsync();
    }

    public async Task<Department> GetDepartmentById(int EmpId)
    {
      return await _departmentDbContext.Department_tbl.FindAsync(EmpId);
    }

    public async Task UpdateDepartment(int EmpId, Department model)
    {
      var departments = await _departmentDbContext.Department_tbl.FindAsync(EmpId);
      if (departments == null)
      {
        throw new Exception("Department not found");
      }
      departments.DepartmentId = model.DepartmentId;
      departments.DepartmentName = model.DepartmentName;
      
      await _departmentDbContext.SaveChangesAsync();
    }

    public async Task DeleteDepartmentById(int EmpId)
    {
      var departments = await _departmentDbContext.Department_tbl.FindAsync(EmpId);
      if (departments == null)
      {
        throw new Exception($"{EmpId} not found");
      }
      _departmentDbContext.Department_tbl.Remove(departments);
      await _departmentDbContext.SaveChangesAsync();
    }
  }
}
