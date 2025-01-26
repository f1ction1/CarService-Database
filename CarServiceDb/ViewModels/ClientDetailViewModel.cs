using CarServiceDb.Entities;

namespace CarServiceDb.ViewModels
{
    public class ClientDetailViewModel
    {
        public int Id { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public string? Phone { get; set; }
        public string? Email { get; set; }
        public IEnumerable<WorkDAL> Works { get; set; } = new List<WorkDAL>();

        public class WorkDAL
        {
            public required string Description { get; set; }
            public required DateTime Date { get; set; }
            public required decimal Price { get; set; }
        }
    }
}
