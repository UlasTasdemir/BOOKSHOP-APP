using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;

namespace bookshop.webapi.Controllers
{
    [ApiController]
    [Route("")]
    public class ProductController : ControllerBase
    {
        [HttpGet("getBooksFromApi")]
        public async Task<ActionResult> getBooksFromApi()
        {
            string apiKey = "mysecretapikey";
            HttpClient client = new HttpClient();
            var response = await client.GetAsync($"https://www.googleapis.com/books/v1/volumes?q=software+design&key={apiKey}");
            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                
                Console.WriteLine(content);
                return Ok();
            }
            else
            {
                // Hata durumunda uygun bir mesaj döndürüyoruz
                return BadRequest("Google Books API'den veri alınamadı.");
            }
        }
    }
}
