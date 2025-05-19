using Microsoft.AspNetCore.Mvc;

namespace plataforma_digital.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HelloController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Bem vindo a API!");
        }
    }
}