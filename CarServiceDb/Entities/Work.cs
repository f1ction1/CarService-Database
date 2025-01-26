namespace CarServiceDb.Entities
{
    public class Work
    {
        public int WorkId { get; set; } 
        public int ClientId { get; set; }
        public required string Description { get; set; }
        public required DateTime Date { get; set; }
        public required decimal Price { get; set; }

        // Навигационное свойство для связи с клиентом
        public Client Client { get; set; } = null!;
    }
}
