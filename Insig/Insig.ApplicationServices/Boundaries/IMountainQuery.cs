using System.Collections.Generic;
using System.Threading.Tasks;
using Insig.PublishedLanguage.Dtos;
using Insig.PublishedLanguage.Queries;

namespace Insig.ApplicationServices.Boundaries
{
    public interface IMountainQuery
    {
        Task<List<MountainDTO>> GetMountainData(MountainParameter query);
    }
}
