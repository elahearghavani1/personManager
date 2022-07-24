using System.ComponentModel.DataAnnotations;

namespace PersonManager.Models
{
    public class Person
    {
        [Key]
        public long Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string LastName { get; set; }
        [EmailAddress]
        [Required]
        public string Email { get; set; }
        [Phone]
        [Required]
        public string Phone { get; set; }

    }
}
