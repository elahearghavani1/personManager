using Microsoft.EntityFrameworkCore;
using PersonManager.Models;

namespace PersonManager.DBContexts
{
    public class PersonContext:DbContext
    {

        public PersonContext()
        {
        }

        public virtual DbSet<Person> Persons { set; get; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=ELAHE-PC;Initial Catalog=PersonDB;Integrated Security=true");
        }
    }
}
