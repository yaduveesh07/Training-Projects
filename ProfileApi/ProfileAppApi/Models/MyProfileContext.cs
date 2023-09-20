using Microsoft.EntityFrameworkCore;

namespace ProfileApp.Models
{
    public class MyProfileContext : DbContext
    {
        public MyProfileContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<ProfileApp> Profiles { get; set; }

    }
}
