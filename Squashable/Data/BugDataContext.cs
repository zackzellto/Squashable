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

        public DbSet<BugInfo> squashableBugInfo { get; set; }
        public DbSet<Users> squashableUsers { get; set; }

        public override int SaveChanges()
        {
            ChangeTracker.DetectChanges();
            return base.SaveChanges();
        }

    }
}

