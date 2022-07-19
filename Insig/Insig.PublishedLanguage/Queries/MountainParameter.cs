using System.Collections.Generic;
using Insig.Common.CQRS;
using Insig.PublishedLanguage.Dtos;

namespace Insig.PublishedLanguage.Queries
{
    public class MountainParameter : IQuery<List<MountainDTO>>
    {
        public int ?Id { get; set; }
        public int ?Start { get; set; }
        public int ?End { get; set; }
    }
}
