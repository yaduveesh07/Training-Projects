
using Microsoft.EntityFrameworkCore;

namespace Employee_crud_operation_api.Models
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options) { }

        public DbSet<Employee> Employee_tbl { get; set; }
        public DbSet<Department> Department_tbl { get; set; }

    }
}
