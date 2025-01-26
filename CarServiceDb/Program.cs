using CarServiceDb;
using CarServiceDb.CreateCommands;
using CarServiceDb.Entities;
using CarServiceDb.Services;
using CarServiceDb.ViewModels;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
// add database SQlite
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<AutoServiceDbContext>(options => options.UseSqlite(connectionString));
// allow frontend get access to our API
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173") // Replace with your frontend URL
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});
builder.Services.AddScoped<ClientService>();
builder.Services.AddScoped<WorkService>();

var app = builder.Build();

// allow frontend get access to our API
app.UseCors("AllowFrontend");

// Client API
var clientRoutes = app.MapGroup("client");

clientRoutes.MapGet("/getAll", async (ClientService service) => await service.GetClients()).WithSummary("List of clients");
clientRoutes.MapGet("/get/{id}", async (int id, ClientService service) =>
{
    var client = await service.GetClientDetail(id);
    return client is null ? Results.Problem(statusCode: 404) : Results.Ok(client);
})
    .WithName("view-client")
    .WithSummary("Get client")
    .ProducesProblem(404)
    .Produces<ClientDetailViewModel>();

clientRoutes.MapPost("/add",async (CreateClientCommand input, ClientService service) =>
{
    var id = await service.CreateClient(input);
    return id;
}).WithSummary("Create client")
  .Produces(StatusCodes.Status201Created); 

clientRoutes.MapDelete("delete/{id}", async (int id, ClientService service) =>
{
    await service.DeleteClient(id);
    return Results.NoContent();
}).WithSummary("Delete client")
  .Produces(201);

// Work API
var workRoutes = app.MapGroup("work");

workRoutes.MapGet("/getAll", async (WorkService service) =>
{
    return await service.GetWorks();
}).WithSummary("List of works"); 

workRoutes.MapPost("/add", async (CreateWorkCommand input, WorkService service) =>
{
    var id = await service.CreateWork(input);
    return id;
}).WithSummary("Create work")
  .Produces(StatusCodes.Status201Created);

workRoutes.MapDelete("/delete/{id}", async (int id, WorkService service) =>
{
    await service.DeleteWork(id);
    return Results.NoContent();
}).WithSummary("Delete work")
  .Produces(201);

app.Run();

