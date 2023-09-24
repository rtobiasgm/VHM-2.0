namespace Domain.Entities
{
    public class Customer : AuditableBaseEntity
    {
        public string Name { get; set; }
        public string LastName { get; set; }
        public string DocumentId { get; set; }
        public DateTime BirthDate { get; set; }
        public string PersonType { get; set; }
    }
}
