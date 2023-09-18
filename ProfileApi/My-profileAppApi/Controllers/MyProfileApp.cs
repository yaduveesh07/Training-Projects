using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace My_profileAppApi.Controllers
{
    public class MyProfileApp
    {
        public int Id { get; set; }
        
        public string firstname { get; set; }

        public string lastname { get; set; }

        public string email { get; set; }
    }
}
