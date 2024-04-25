using Microsoft.EntityFrameworkCore;

namespace Employee_Management.Models
{
  public class EmployeeDbContext: DbContext
  {
    public EmployeeDbContext(DbContextOptions<EmployeeDbContext> options) : base(options) { }
    public DbSet<Employee> Employee_tbl { get; set;}
    public DbSet<Department> Department_tbl { get; set; }
  }
}
