namespace CarServiceDb.Entities
{
    public class Client
    {
        public int ClientId { get; set; }
        public required string FirstName { get; set; } 
        public required string LastName { get; set; } 
        public string? Phone { get; set; } 
        public string? Email { get; set; } 
        public ICollection<Work> Works { get; set; } = new List<Work>();
    }
}
