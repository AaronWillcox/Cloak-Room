using System.ComponentModel.DataAnnotations;

namespace CafeAPI.Models
{
    public class MenuItemModel
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public double Price { get; set; }

        public string Image { get; set; }

    }
}
