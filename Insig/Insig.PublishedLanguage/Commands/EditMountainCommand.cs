using Insig.Common.CQRS;
using Insig.PublishedLanguage.Dtos;

namespace Insig.PublishedLanguage.Commands
{
    public class EditMountainCommand : ICommand
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Height { get; set; }
        public string Difficulty { get; set; }
        public string Country { get; set; }
        public string Range { get; set; }
        public string Park { get; set; }
        public string Shelter { get; set; }
        public double ShelterDistance { get; set; }
        public string FoodQuality { get; set; }
        public bool AlwaysSnow { get; set; }
        public bool LiftAvailable { get; set; }
        public int Trails { get; set; }
        public bool IsDeleted { get; set; }

    }
}
