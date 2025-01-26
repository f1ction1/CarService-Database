using CarServiceDb.CreateCommands;
using CarServiceDb.Entities;
using CarServiceDb.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace CarServiceDb.Services
{
    public class WorkService
    {
        readonly AutoServiceDbContext _dBContext;
        public WorkService(AutoServiceDbContext dbContext)
        {
            _dBContext = dbContext;
        }
        public async Task<List<WorkViewModel>> GetWorks()
        {
            return await _dBContext.Works.Select(item => new WorkViewModel
            {
                WorkId = item.WorkId,
                ClientId = item.ClientId,
                Date = item.Date,
                Description = item.Description,
                Price = item.Price,
            }).ToListAsync();
        }
        public async Task<int> CreateWork(CreateWorkCommand cmd)
        {
            var date = cmd.Date.Split('-');
            var work = new Work
            {
                ClientId = cmd.ClientId,
                Date = new DateTime(int.Parse(date[2]), int.Parse(date[1]), int.Parse(date[0])),
                Description = cmd.Description,
                Price = cmd.Price,
            };
            _dBContext.Add(work);
            await _dBContext.SaveChangesAsync();
            return work.WorkId;
        }
        public async Task DeleteWork(int id)
        {
            var work = await _dBContext.Works.FindAsync(id);
            if(work is not null)
            {
                _dBContext.Remove(work);
                await _dBContext.SaveChangesAsync();
            }
        }
    }
}
