using PersonManager.Models;
using System.Collections.Generic;

namespace PersonManager.Repository
{
    public interface IPersonRepository
    {
        IEnumerable<Person> GetPersons();
        Person GetPersonByID(int pesonId);
        void InsertPerson(Person person);
        void DeletePerson(int pesonId);
        void UpdatePerson(Person person);
        void Save();
    }
}
