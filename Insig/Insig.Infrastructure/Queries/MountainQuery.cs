using System.Collections.Generic;
using System.Threading.Tasks;
using EnsureThat;
using Insig.ApplicationServices.Boundaries;
using Insig.Infrastructure.QueryBuilder;
using Insig.PublishedLanguage.Dtos;
using Insig.PublishedLanguage.Queries;

namespace Insig.Infrastructure.Queries
{
    public class MountainQuery : IMountainQuery
    {
        private readonly SqlQueryBuilder _sqlQueryBuilder;

        public MountainQuery(SqlQueryBuilder sqlQueryBuilder)
        {
            EnsureArg.IsNotNull(sqlQueryBuilder, nameof(sqlQueryBuilder));
            _sqlQueryBuilder = sqlQueryBuilder;
        }

        public async Task<List<MountainDTO>> GetMountainData(MountainParameter query)
        {
            return await _sqlQueryBuilder
                .Select("Name")
                .From("Mountain")
                .BuildQuery<MountainDTO>()
                .ExecuteToList();
        }

    }
}
