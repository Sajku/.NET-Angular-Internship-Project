using System.Threading.Tasks;
using Insig.ApplicationServices.Boundaries;
using Insig.Common.CQRS;
using Insig.Domain;
using Insig.Domain.Samples;
using Insig.PublishedLanguage.Commands;

namespace Insig.ApplicationServices.UseCases
{
    public class EditMountainStatusUseCase : ICommandHandler<EditMountainStatusCommand>
    {
        private readonly IMountainRepository _mountainRepository;
        private readonly IUnitOfWork _unitOfWork;

        public EditMountainStatusUseCase(IMountainRepository mountainRepository, IUnitOfWork unitOfWork)
        {
            _mountainRepository = mountainRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task Handle(EditMountainStatusCommand command)
        {
            Mountain tempMountain = new Mountain(command.Id, command.IsDeleted);
            _mountainRepository.Update(tempMountain);
            await _unitOfWork.Save();
        }
    }
}
