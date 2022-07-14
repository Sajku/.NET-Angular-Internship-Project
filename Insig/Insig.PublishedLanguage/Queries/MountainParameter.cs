using System.Collections.Generic;
using Insig.Common.CQRS;
using Insig.PublishedLanguage.Dtos;

namespace Insig.PublishedLanguage.Queries
{
    public class MountainParameter : IQuery<List<MountainDTO>>
    {
    }
}
