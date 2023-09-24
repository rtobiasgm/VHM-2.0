using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configuration
{
    public class CustomerConfig : IEntityTypeConfiguration<Customer>
    {
        public void Configure(EntityTypeBuilder<Customer> builder)
        {
            builder.ToTable("Customers");

            builder.HasKey(p => p.Id);

            builder.Property(p => p.Name)
                .HasMaxLength(50)
                .IsRequired();

            builder.Property(p => p.LastName)
                .HasMaxLength(50)
                .IsRequired();

            builder.Property(p => p.DocumentId)
               .HasMaxLength(11)
               .IsRequired();

            builder.Property(p => p.BirthDate)
              .IsRequired();

            builder.Property(p => p.PersonType)
            .IsRequired();

        }
    }
}
