using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Employee_crud_operation_api.Models
{
    public class Employee
    {
        [Key]
        public int EmpId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNo { get; set; }
        public DateTimeOffset Dob { get; set; }
        public DateTimeOffset JoiningDate { get; set; }
        public int DepartmentId { get; set; }
        public string? Address { get; set; }
        public bool IsDeleted { get; set; }

        [NotMapped]
        public string? DepartmentName { get; set; }
    }
}
