using System;
using System.Linq;
using EnsureThat;
using Insig.ApplicationServices.Boundaries;
using Insig.Common.Exceptions;
using Insig.Domain.Samples;
using Insig.Infrastructure.DataModel.Context;

namespace Insig.Infrastructure.Domain
{
    public class MountainRepository : IMountainRepository
    {
        private readonly InsigContext _context;

        public MountainRepository(InsigContext context)
        {
            EnsureArg.IsNotNull(context, nameof(context));
            _context = context;
        }

        public void EnsureThatMountainDoesNotExist(string name)
        {
            var sample = _context.Mountains.FirstOrDefault(r => r.Name == name);
            if (sample != null)
            {
                throw new DomainException($"Provided mountain name: \"{name}\" already exist.");
            }
        }

        public void Store(Mountain mountain)
        {
            _context.Mountains.Add(mountain);
        }

        public void Update(Mountain mountain)
        {
            _context.Mountains.Update(mountain);
        }

        public void UpdateStatus(Mountain mountain)
        {
            _context.Mountains.Attach(mountain);
            _context.Entry(mountain).Property("IsDeleted").IsModified = true;
        }
    }
}
