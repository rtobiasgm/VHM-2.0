namespace Domain.Entities
{
    public class AuditableBaseEntity
    {
        public virtual int Id { get; set; }
        public DateTime AddedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public int Status { get; set; }
    }
}
