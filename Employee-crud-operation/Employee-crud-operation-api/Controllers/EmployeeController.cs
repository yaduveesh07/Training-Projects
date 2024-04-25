using Employee_crud_operation_api.Data;
using Employee_crud_operation_api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Employee_crud_operation_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeRepository _employeeRepository;

        public EmployeeController(EmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        [HttpGet]
        public async Task<ActionResult> GetEmployeeList()
        {
            var employeeList = await _employeeRepository.GetAllEmployeesAsync();
            return Ok(employeeList);
        }

        //public async Task<ActionResult<IEnumerable<Employee>>> GetEmp_tbls()
        //{
           // var employees = await _employeeRepository.GetAllEmployees();
         //   return Ok(employees);
        //}

        [HttpGet("{EmpId}")]
        public async Task<ActionResult<Employee>> GetEmployeeById([FromRoute] int EmpId)
        {
            var employee = await _employeeRepository.GetEmployeeByIdAsync(EmpId);
            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }

        [HttpPost]
        public async Task<ActionResult> AddEmployee([FromBody] Employee model)
        {
            await _employeeRepository.AddEmployeeAsync(model);
            return Ok();
        }

        //public async Task<ActionResult<Employee>> CreateEmp_tbl(Employee employee)
        //{
         //   var createdEmployee = await _employeeRepository.CreateEmployee(employee);
         //   return CreatedAtAction(nameof(GetEmp_tbl), new { id = createdEmployee.EmpId }, createdEmployee);
       // }

        [HttpPut("{EmpId}")]
        public async Task<ActionResult> UpdateEmp_tbl([FromRoute] int EmpId, [FromBody] Employee model)
        {
            await _employeeRepository.UpdateEmployee(EmpId, model);
            return NoContent();
        }

        [HttpDelete("{EmpId}")]
        public async Task<ActionResult> DeleteEmp_tbl([FromRoute] int EmpId)
        {
            var existingEmployee = await _employeeRepository.GetEmployeeByIdAsync(EmpId);
            if (existingEmployee == null)
            {
                return NotFound($"Employee with ID {EmpId} not found.");
            }

            await _employeeRepository.DeleteEmployeeById(EmpId);
            return Ok();
        }
    }

}
