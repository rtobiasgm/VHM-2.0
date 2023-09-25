namespace Domain.Entities
{
    public class CarType : AuditableBaseEntity
    {
        public int Value { get; set; }
        public string Description { get; set; }
        public char Type { get; set; }
    }
}
