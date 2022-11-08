
using System.Collections.Generic;
using Application.Activities;
using Application.Core;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extentions
{

    public static class ApplicationServiceExtentions
    {
        public static void AddApplicationServices(this IServiceCollection services, 
            IConfiguration config)
        {
            services.AddMediatR(typeof(List.Handler).Assembly);
            services.AddMediatR(typeof(List.Handler).Assembly);
            services.AddAutoMapper(typeof(MappingProfiles).Assembly);

            services.AddCors(options =>
            {
                options.AddPolicy(name: "_myAllowSpecificOrigins",
                                builder =>
                                {
                                    builder.WithOrigins("http://localhost:3000",
                                                        "https://localhost:3000");
                                });
            });

            services.AddDbContext<DataContext>(options =>
            {
                options.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });

            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();

            services.Configure<RouteOptions>(options =>
            {
             options.LowercaseUrls = true;
            });
        }
    }
}
