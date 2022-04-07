#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CafeAPI.Data;
using CafeAPI.Models;

namespace CafeAPI.Controllers
{
    [Route("api/product")]
    [ApiController]
    public class MenuItemController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public MenuItemController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/MenuItem
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MenuItemModel>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        
        [Route("cart")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MenuItemModel>>> GetCartItems(int[] products)
        {
            List<MenuItemModel> prods = new List<MenuItemModel>();

            foreach (var id in products)
            {
                var productModel = await _context.Products.FindAsync(id);
                if(productModel != null)
                {
                    prods.Add(productModel);
                }
            }

            return await _context.Products.ToListAsync();
        }

        // GET: api/MenuItem/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MenuItemModel>> GetMenuItemModel(int id)
        {
            var menuItemModel = await _context.Products.FindAsync(id);

            if (menuItemModel == null)
            {
                return NotFound();
            }

            return menuItemModel;
        }

        // PUT: api/MenuItem/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMenuItemModel(int id, MenuItemModel menuItemModel)
        {
            if (id != menuItemModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(menuItemModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MenuItemModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/MenuItem
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MenuItemModel>> PostMenuItemModel(MenuItemModel menuItemModel)
        {
            _context.Products.Add(menuItemModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMenuItemModel", new { id = menuItemModel.Id }, menuItemModel);
        }

        // DELETE: api/MenuItem/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMenuItemModel(int id)
        {
            var menuItemModel = await _context.Products.FindAsync(id);
            if (menuItemModel == null)
            {
                return NotFound();
            }

            _context.Products.Remove(menuItemModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MenuItemModelExists(int id)
        {
            return _context.Products.Any(e => e.Id == id);
        }
    }
}
