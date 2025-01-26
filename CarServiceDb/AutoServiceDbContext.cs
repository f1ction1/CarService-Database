using CarServiceDb.Entities;
using Microsoft.EntityFrameworkCore;

namespace CarServiceDb
{
    public class AutoServiceDbContext : DbContext
    {
        public DbSet<Client> Clients { get; set; } = null!;
        public DbSet<Work> Works { get; set; } = null!;

        public AutoServiceDbContext(DbContextOptions<AutoServiceDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Определение связей между таблицами
            modelBuilder.Entity<Work>()
                .HasOne(w => w.Client)
                .WithMany(c => c.Works)
                .HasForeignKey(w => w.ClientId);
        }
    }
}
