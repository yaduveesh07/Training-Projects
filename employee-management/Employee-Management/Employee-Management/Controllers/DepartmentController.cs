using Department_Management.data;
using Employee_Management.data;
using Employee_Management.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Department_Management.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class DepartmentController : ControllerBase
  {
    private readonly DepartmentRepository _departmentRepository;

    public DepartmentController(DepartmentRepository departmentRepository)
    {
      _departmentRepository = departmentRepository;
    }

    [HttpPost]
    public async Task<ActionResult> AddDepartment([FromBody] Department model)
    {
      await _departmentRepository.AddDepartmentAsync(model);
      return Ok();
    }

    [HttpGet]
    public async Task<ActionResult> GetDepartmentList()
    {
      var employeeList = await _departmentRepository.GetAllDepartmentAsync();
      return Ok(employeeList);
    }

    [HttpGet("{DepartmentId}")]
    public async Task<ActionResult<Department>> GetDepartmentById([FromRoute] int DepartmentId)
    {
      var department = await _departmentRepository.GetDepartmentById(DepartmentId);
      if (department == null)
      {
        return NotFound();
      }
      return Ok(department);
    }

    [HttpPut("{DepartmentId}")]
    public async Task<ActionResult> UpdateDepartment([FromRoute] int DepartmentId, [FromBody] Department model)
    {
      await _departmentRepository.UpdateDepartment(DepartmentId, model);
      return Ok();
    }

    [HttpDelete("{DepartmentId}")]
    public async Task<ActionResult> DeleteDepartmentById([FromRoute] int DepartmentId)
    {
      var existingDepartment = await _departmentRepository.GetDepartmentById(DepartmentId);
      if (existingDepartment == null)
      {
        return NotFound($"Department with ID {DepartmentId} not found.");
      }

      await _departmentRepository.DeleteDepartmentById(DepartmentId);
      return Ok();
    }
  }
}
