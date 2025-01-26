﻿namespace CarServiceDb.ViewModels
{
    public class ClientSummaryViewModel
    {
        public int Id { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public string? Phone {  get; set; }
        public int NumberOfWorks {  get; set; }
    }
}
