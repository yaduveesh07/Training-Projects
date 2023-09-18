using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace ProfileApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProfileAppController : ControllerBase
    {

        private readonly ILogger<ProfileAppController> _logger;

        public ProfileAppController(ILogger<ProfileAppController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetProfileApp")]
        public IEnumerable<ProfileApp> Get()
        {
            var list = new List<ProfileApp>();

            ProfileApp profile1 = new ProfileApp()
            {
                id = 1,
                firstname = "rakesh",
                lastname = "kumar",
                email = "rakesh@gmail.com"
            };

            ProfileApp profile2 = new ProfileApp()
            {
                id = 2,
                firstname = "mukesh",
                lastname = "kumar",
                email = "mukesh@gmail.com"
            };

            ProfileApp profile3 = new ProfileApp()
            {
                id = 3,
                firstname = "suresh",
                lastname = "kumar",
                email = "suresh@gmail.com"
            };

            list.Add(profile1);
            list.Add(profile2);
            list.Add(profile3);
            // list.Remove(profile1);
            return list;
        }
    }
}