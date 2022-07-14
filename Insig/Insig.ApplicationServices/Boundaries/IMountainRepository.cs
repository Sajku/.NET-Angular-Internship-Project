using Insig.Domain.Samples;

namespace Insig.ApplicationServices.Boundaries
{
    public interface IMountainRepository
    {
        void EnsureThatMountainDoesNotExist(string name);
        void Store(Mountain mountain);
    }
}
