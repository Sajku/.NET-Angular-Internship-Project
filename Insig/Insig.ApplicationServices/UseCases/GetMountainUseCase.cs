using EnsureThat;
using Insig.ApplicationServices.Boundaries;
using Insig.Common.CQRS;
using Insig.PublishedLanguage.Dtos;
using Insig.PublishedLanguage.Queries;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Insig.ApplicationServices.UseCases
{
    public class GetMountainUseCase : IQueryHandler<MountainParameter, List<MountainDTO>>
    {
        private readonly IMountainQuery _mountainQuery;

        public GetMountainUseCase(IMountainQuery mountainQuery)
        {
            EnsureArg.IsNotNull(mountainQuery, nameof(mountainQuery));

            _mountainQuery = mountainQuery;
        }

        public async Task<List<MountainDTO>> Handle(MountainParameter query)
        {
            return await _mountainQuery.GetMountainData(query);
        }
    }
}
