
using System.ComponentModel.DataAnnotations;

namespace Squashable
{
    public class BugInfo
    {
        public int Id { get; set; }
        [Required]

        [DataType(DataType.DateTime)]
        public DateTime Date { get; set; }

        public string? Title { get; set; }

        public string? Description { get; set; }

        public string? Comments { get; set; }

        public string? Status { get; set; }

        public string? Priority { get; set; }

        public string? Severity { get; set; }

        public string? CreatedBy { get; set; }

    }
}

