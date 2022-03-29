using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using CafeAPI.Models;

namespace CafeAPI.Data
{
    //set up database class
    public class ApplicationDbContext : IdentityDbContext<IdentityUser>
    {
        public DbSet<UserModel> Users { get; set; }
        public DbSet<MenuItemModel> Products { get; set; }
        
        //constructor that allows us to use the database
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
    }
}