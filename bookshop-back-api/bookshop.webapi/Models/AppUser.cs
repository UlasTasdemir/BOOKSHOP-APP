using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace bookshop.webapi.Models
{
    public class AppUser : IdentityUser<int>
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public override int Id { get; set; }
    }
}
