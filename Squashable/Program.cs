using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Squashable;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddSwaggerGen(s =>
{
    s.SwaggerDoc("v1", new OpenApiInfo { Title = "Squashable API", Version = "v1", Description = "Squashable API for Bug Tracking" });
});

builder.Services.AddControllers();

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



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger(options =>
    {
        options.SerializeAsV2 = true;
    });

    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Squashable API V1");
        c.RoutePrefix = "swagger";
    });
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.

}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapControllers();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}");
});

app.MapFallbackToFile("index.html");

app.UseSpa(spa =>
{
    spa.Options.SourcePath = "ClientApp";

    {
        spa.UseReactDevelopmentServer(npmScript: "start");
    }
});

app.Run();

