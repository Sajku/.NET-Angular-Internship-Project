using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Insig.PublishedLanguage.Dtos
{
    public class MountainDTO
    {
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
