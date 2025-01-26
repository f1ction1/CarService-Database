namespace CarServiceDb.ViewModels
{
    public class WorkViewModel
    {
        public int WorkId { get; set; }
        public int ClientId { get; set; }
        public required string Description { get; set; }
        public required DateTime Date { get; set; }
        public required decimal Price { get; set; }
    }
}
