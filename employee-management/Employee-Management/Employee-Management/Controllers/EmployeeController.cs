using Employee_Management.data;
using Employee_Management.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Employee_Management.Controllers
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

    [HttpPost]
    public async Task<ActionResult> AddEmployee([FromBody] Employee model)
    {
      await _employeeRepository.AddEmployeeAsync(model);
      return Ok();
    }

    [HttpGet]
    public async Task<ActionResult> GetEmployeeList()
    {
      var employeeList = await _employeeRepository.GetAllEmployeeAsync();
      return Ok(employeeList);
    }

    [HttpGet("{EmpId}")]
    public async Task<ActionResult<Employee>> GetEmployeeById([FromRoute] int EmpId)
    {
      var employee = await _employeeRepository.GetEmployeeById(EmpId);
      if (employee == null)
      {
        return NotFound();
      }
      return Ok(employee);
    }

    [HttpPut("{EmpId}")]
    public async Task<ActionResult> UpdateEmployee([FromRoute] int EmpId, [FromBody] Employee model)
    {
      await _employeeRepository.UpdateEmployee(EmpId, model);
      return Ok();
    }

    [HttpDelete("{EmpId}")]
    public async Task<ActionResult> DeleteEmployeeById([FromRoute] int EmpId)
    {
      var existingEmployee = await _employeeRepository.GetEmployeeById(EmpId);
      if (existingEmployee == null)
      {
        return NotFound($"Employee with ID {EmpId} not found.");
      }

      await _employeeRepository.DeleteEmployeeById(EmpId);
      return Ok();
    }
  }
}
