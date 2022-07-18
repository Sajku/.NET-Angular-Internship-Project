using EnsureThat;
using Insig.Common.Exceptions;

namespace Insig.Domain.Samples
{
    public class Mountain
    {
        public Mountain(string name, int height, string difficulty, string country,
                        string range, string park, string shelter, double shelterDistance,
                        string foodQuality, bool alwaysSnow, bool liftAvailable, int trails, bool isDeleted)
        {
            EnsureThatNameIsCorrect(name);

            Name = name;
            Height = height;
            Difficulty = difficulty;
            Country = country;
            Range = range;
            Park = park;
            Shelter = shelter;
            ShelterDistance = shelterDistance;
            FoodQuality = foodQuality;
            AlwaysSnow = alwaysSnow;
            LiftAvailable = liftAvailable;
            Trails = trails;
            IsDeleted = isDeleted;
        }

        public Mountain(int id, string name, int height, string difficulty, string country,
                        string range, string park, string shelter, double shelterDistance,
                        string foodQuality, bool alwaysSnow, bool liftAvailable, int trails, bool isDeleted)
        {
            EnsureThatNameIsCorrect(name);

            Id = id;
            Name = name;
            Height = height;
            Difficulty = difficulty;
            Country = country;
            Range = range;
            Park = park;
            Shelter = shelter;
            ShelterDistance = shelterDistance;
            FoodQuality = foodQuality;
            AlwaysSnow = alwaysSnow;
            LiftAvailable = liftAvailable;
            Trails = trails;
            IsDeleted = isDeleted;
        }

        public Mountain(int id, bool isDeleted)
        {
            Id = id;
            IsDeleted = isDeleted;
        }

        public int Id { get; private set; }
        public string Name { get; private set; }
        public int Height { get; private set; }
        public string Difficulty { get; private set; }
        public string Country { get; private set; }
        public string Range { get; private set; }
        public string Park { get; private set; }
        public string Shelter { get; private set; }
        public double ShelterDistance { get; private set; }
        public string FoodQuality { get; private set; }
        public bool AlwaysSnow { get; private set; }
        public bool LiftAvailable { get; private set; }
        public int Trails { get; private set; }
        public bool IsDeleted { get; set; }

        private void EnsureThatNameIsCorrect(string name)
        {
            EnsureArg.IsNotNullOrWhiteSpace(name, nameof(name));

            if (name.ToLower().Contains("test"))
            {
                throw new DomainException($"Sample value with name: {name} is not allowed.");
            }
        }

    }
}
