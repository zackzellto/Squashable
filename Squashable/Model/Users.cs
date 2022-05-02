

using System.ComponentModel.DataAnnotations;

namespace Squashable
{
    public class Users
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime Created { get; set; }
    }
}

