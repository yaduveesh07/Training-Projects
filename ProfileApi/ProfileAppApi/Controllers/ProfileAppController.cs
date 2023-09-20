using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using ProfileApp.Models;
using System.ComponentModel.DataAnnotations;
using System.Data;

namespace ProfileApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProfileAppController : ControllerBase
    {
        public readonly IConfiguration _configuration;
        public ProfileAppController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet(Name = "GetProfileApp")]
        

        public String GetProfileApp()
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("MyProfile"));
            SqlDataAdapter da = new SqlDataAdapter("Select * from Profiles", con);
            DataTable dt = new DataTable();
            da.Fill(dt);

            List<ProfileApp> profilelist = new List<ProfileApp>();
            Response response = new Response();
            if (dt.Rows.Count > 0 )
            {
                for(int i=0; i<dt.Rows.Count; i++) 
                {
                    ProfileApp profile = new ProfileApp();
                    profile.id = Convert.ToInt32(dt.Rows[i]["Id"]);
                    profile.firstname = Convert.ToString(dt.Rows[i]["First_Name"]);
                    profile.lastname = Convert.ToString(dt.Rows[i]["Last_Name"]);
                    profile.email = Convert.ToString(dt.Rows[i]["Email"]);
                    profilelist.Add(profile);
                }
            }
            if(profilelist.Count > 0)
            {
                return JsonConvert.SerializeObject(profilelist);
            }
            else
            {
                response.StatusCode = 100;
                response.ErrorMessage = "No data found";
                return JsonConvert.SerializeObject(response);
            }
        }
    }
}