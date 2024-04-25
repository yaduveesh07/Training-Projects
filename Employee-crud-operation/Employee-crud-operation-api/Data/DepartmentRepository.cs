
using Employee_crud_operation_api.Models;
using System.Data.Entity;

namespace Employee_crud_operation_api.Data
{
    public interface IDepartmentRepository
    {
        Task<IEnumerable<Department>> GetAllDepartments();
        Task<Department> GetDepartmentById(int DepartmentId);
        Task<Department> CreateDepartment(Department department);
        Task UpdateDepartment(Department department);
        Task DeleteDepartment(Department department);
    }
    public class DepartmentRepository : IDepartmentRepository
    {
        private readonly EmployeeContext _context;

        public DepartmentRepository(EmployeeContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Department>> GetAllDepartments()
        {
            return await _context.Department_tbl.ToListAsync();
        }

        public async Task<Department> GetDepartmentById(int DepartmentId)
        {
            return await _context.Department_tbl.FindAsync(DepartmentId);
        }

        public async Task<Department> CreateDepartment(Department department)
        {
            _context.Department_tbl.Add(department);
            await _context.SaveChangesAsync();
            return department;
        }

        public async Task UpdateDepartment(Department department)
        {
            //_context.Entry(department).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteDepartment(Department department)
        {
            _context.Department_tbl.Remove(department);
            await _context.SaveChangesAsync();
        }
    }
}
