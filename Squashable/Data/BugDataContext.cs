using System;
using Microsoft.EntityFrameworkCore;


namespace Squashable
{
    public class BugDataContext : DbContext
    {
        public BugDataContext(DbContextOptions<BugDataContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseSerialColumns();
        }

        public DbSet<BugInfo> BugProps { get; set; }
        public DbSet<User> Users { get; set; }
    }
}

