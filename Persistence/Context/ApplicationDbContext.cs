using Application.Features.Customers.Commands.CreateCustomerCommand;
using Application.Interfaces;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Persistence.Context
{
    public class ApplicationDbContext : DbContext
    {
        private readonly IDateTimeService _dateTime;
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options, IDateTimeService dateTime) : base (options)
        {
            ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }

        public DbSet<Customer> Customers { get; set; }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        {
            foreach (var entry in ChangeTracker.Entries<AuditableBaseEntity>())
            {
                switch (entry.State)
                {
                    case EntityState.Added:
                        entry.Entity.AddedDate = _dateTime.NowUtc;
                        break;
                    case EntityState.Modified:
                        entry.Entity.UpdatedDate = _dateTime.NowUtc;
                        break;       
                }
            }
            return base.SaveChangesAsync(cancellationToken);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
