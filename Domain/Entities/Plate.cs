namespace Domain.Entities
{
    public class Plate : AuditableBaseEntity
    {
        public int Value { get; set; }
        public CarType CarType { get; set; }
        public Customer Customer { get; set; }
        public DateTime SaleDate { get; set; }
    }
}
