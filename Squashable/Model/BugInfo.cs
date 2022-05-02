using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Squashable
{
    public class BugInfo
    {
        public int Id { get; set; }
        [Required]

        public string? Title { get; set; }

        public string? Description { get; set; }

        public string? Status { get; set; }

        public string? Priority { get; set; }

        public string? Severity { get; set; }

        public string? AssignedTo { get; set; }

        public string? CreatedBy { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime ModifiedDate { get; set; }

        public string? ModifiedBy { get; set; }

    }
}

