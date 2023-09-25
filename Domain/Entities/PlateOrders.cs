namespace Domain.Entities
{
    public class PlateOrders : AuditableBaseEntity
    {
        public int Total { get; set; }
        public Customer Customer { get; set; }
        public DateTime Date { get; set; }
    }
}
