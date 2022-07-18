using Insig.Common.CQRS;
using Insig.PublishedLanguage.Dtos;

namespace Insig.PublishedLanguage.Commands
{
    public class EditMountainStatusCommand : ICommand
    {
        public int Id { get; set; }
        public bool IsDeleted { get; set; }
    }
}
