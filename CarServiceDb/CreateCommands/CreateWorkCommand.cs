namespace CarServiceDb.CreateCommands
{
    public class CreateWorkCommand
    {
        public int ClientId { get; set; }
        public required string Description { get; set; }
        public required string Date { get; set; }
        public required decimal Price { get; set; }
    }
}
