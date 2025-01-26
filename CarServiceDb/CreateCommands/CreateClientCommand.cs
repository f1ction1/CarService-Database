using System.ComponentModel.DataAnnotations;

namespace CarServiceDb.CreateCommands
{
    public class CreateClientCommand
    {
        [Required, StringLength(100)]
        public required string FirstName {  get; set; }
        [Required, StringLength(100)]
        public required string LastName { get; set; }
        public string? Phone {  get; set; }
        public string? Email { get; set; }

    }
}
