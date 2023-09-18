using Microsoft.AspNetCore.Mvc;
using My_profileAppApi.Controllers;

namespace My_profileAppApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MyProfileController : Controller
    {
        private readonly ILogger<MyProfileController> _logger;

        public MyProfileController(ILogger<MyProfileController> logger)
        {
            _logger = logger;
        }



        [HttpGet(Name = "GetMyProfileApp")]

        public IEnumerable<MyProfileApp> Get()
        {
            var list = new List<MyProfileApp>();

            MyProfileApp profile = new MyProfileApp()
            {
                Id = 1,
                firstname = "rakesh",
                lastname = "kumar",
                email = "rakesh@gmail.com"
            };

            MyProfileApp profile1 = new MyProfileApp()
            {
                Id = 1,
                firstname = "Arun",
                lastname = "Yadav",
                email = "rakesh@gmail.com"
            };

            list.Add(profile);
            list.Add(profile1);
           // list.Remove(profile1);
            return list;
        }

    }
}
