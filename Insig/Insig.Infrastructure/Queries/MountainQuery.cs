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
            if (query.Id == null && query.Start == null)
            {
                return await _sqlQueryBuilder
                .Select("*")
                .From("Mountain")
                .BuildQuery<MountainDTO>()
                .ExecuteToList();
            }
            else if (query.Id != null)
            {
                return await _sqlQueryBuilder
                .Select("*")
                .From("Mountain")
                .Where("Id", query.Id)
                .BuildQuery<MountainDTO>()
                .ExecuteToList();
            }
            else
            {
                var mountains = await _sqlQueryBuilder
                .Select("*")
                .From("Mountain")
                .BuildQuery<MountainDTO>()
                .ExecuteToList();

                List<MountainDTO> result = new List<MountainDTO>();
                for (int i=(int)query.Start - 1; i<query.End; i++)
                {
                    if (mountains[i] != null)
                    {
                        result.Add(mountains[i]);
                    }
                }

                return result;
            }
        }
    }
}
