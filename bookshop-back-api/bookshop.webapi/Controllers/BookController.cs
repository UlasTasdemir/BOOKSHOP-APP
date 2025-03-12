using bookshop.webapi.Contexts;
using bookshop.webapi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace bookshop.webapi.Controllers
{
    [Route("")]
    [ApiController]
    public class BookController(AppDbContext db) : ControllerBase
    {
        [HttpGet("/getAllBooks")]
        public ActionResult<List<Book>> getAllBooks()
        {
            return db.Books.ToList();
        }
    }
}
