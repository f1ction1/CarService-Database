using CarServiceDb.CreateCommands;
using CarServiceDb.Entities;
using CarServiceDb.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace CarServiceDb.Services
{
    public class ClientService
    {
        readonly AutoServiceDbContext _dbContext;
        public ClientService(AutoServiceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<ClientSummaryViewModel>> GetClients()
        {
            return await _dbContext.Clients.Select(x => new ClientSummaryViewModel
            {
                Id = x.ClientId,
                FirstName = x.FirstName,
                LastName = x.LastName,
                Phone = x.Phone,
                NumberOfWorks = x.Works.Count()
            }).ToListAsync();
        }

        public async Task<ClientDetailViewModel?> GetClientDetail(int id)
        {
            return await _dbContext.Clients.Where(x => x.ClientId == id)
                                   .Select(x => new ClientDetailViewModel
                                   {
                                       Id = x.ClientId,
                                       FirstName = x.FirstName,
                                       LastName = x.LastName,
                                       Phone = x.Phone,
                                       Email = x.Email,
                                       Works = x.Works.Select(work => new ClientDetailViewModel.WorkDAL
                                       {
                                           Description = work.Description,
                                           Date = work.Date,
                                           Price = work.Price
                                       })
                                   }).SingleOrDefaultAsync();
        }
        public async Task<int> CreateClient(CreateClientCommand cmd)
        {
            var client = new Client
            {
                FirstName = cmd.FirstName,
                LastName = cmd.LastName,
                Phone = cmd.Phone,
                Email = cmd.Email
            };
            _dbContext.Add(client);
            await _dbContext.SaveChangesAsync();
            return client.ClientId;
        }

        public async Task DeleteClient(int id)
        {
            var client = await _dbContext.Clients.FindAsync(id);
            if(client is not null)
            {
                _dbContext.Remove(client);
                await _dbContext.SaveChangesAsync();
            }
        }
    }
}
