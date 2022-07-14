using Insig.Domain.Samples;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Insig.Infrastructure.DataModel.Mappings
{
    public class MountainConfiguration : IEntityTypeConfiguration<Mountain>
    {
        public void Configure(EntityTypeBuilder<Mountain> builder)
        {
            builder.ToTable("Mountain");
            builder.HasKey(e => e.Id);
        }
    }
}
