using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersonManager.Repository;
using PersonManager.Models;
using System.Transactions;

namespace PersonManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private readonly IPersonRepository _personRepository;

        [HttpGet]
        public IActionResult GetAll()
        {
            var persons = _personRepository.GetPersons();
            return new OkObjectResult(persons);
        }

        [HttpGet("{id}", Name = "Get")]
        public IActionResult Read(int id)
        {
            var person = _personRepository.GetPersonByID(id);
            return new OkObjectResult(person);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Person person)
        {
            using (var scope = new TransactionScope())
            {
                _personRepository.InsertPerson(person);
                scope.Complete();
                return CreatedAtAction(nameof(GetAll), new { id = person.Id }, person);
            }
        }

        [HttpPut]
        public IActionResult Update([FromBody] Person person)
        {
            if (person != null)
            {
                using (var scope = new TransactionScope())
                {
                    _personRepository.UpdatePerson(person);
                    scope.Complete();
                    return new OkResult();
                }
            }
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _personRepository.DeletePerson(id);
            return new OkResult();
        }
    }
}
