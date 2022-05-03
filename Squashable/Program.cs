using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Squashable;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddSwaggerGen(s =>
{
    s.SwaggerDoc("v1", new OpenApiInfo { Title = "Squashable API", Version = "v1", Description = "Squashable API" });
});

builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<BugDataContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("SquashableDatabase"));
});

var app = builder.Build();

//Enable CORS
app.UseCors(options => options
    .WithOrigins(new[] { "http://localhost:3000", "http://localhost:8080", "http://localhost:4200" })
    .AllowAnyMethod()
    .AllowAnyHeader()
    .AllowCredentials()
    );


app.UseSwagger(options =>
{
    options.SerializeAsV2 = true;
});

app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Squashable API V1");
    c.RoutePrefix = string.Empty;
});
// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{

    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();

