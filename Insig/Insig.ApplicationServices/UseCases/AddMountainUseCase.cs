using System.Threading.Tasks;
using Insig.ApplicationServices.Boundaries;
using Insig.Common.CQRS;
using Insig.Domain;
using Insig.Domain.Samples;
using Insig.PublishedLanguage.Commands;

namespace Insig.ApplicationServices.UseCases
{
    public class AddMountainUseCase : ICommandHandler<AddMountainCommand>
    {
        private readonly IMountainRepository _mountainRepository;
        private readonly IUnitOfWork _unitOfWork;

        public AddMountainUseCase(IMountainRepository mountainRepository, IUnitOfWork unitOfWork)
        {
            _mountainRepository = mountainRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task Handle(AddMountainCommand command)
        {
            _mountainRepository.EnsureThatMountainDoesNotExist(command.Name);

            Mountain tempMountain = new Mountain(command.Name, command.Height,
                command.Difficulty, command.Country, command.Range, command.Park, command.Shelter,
                command.ShelterDistance, command.FoodQuality, command.AlwaysSnow,
                command.LiftAvailable, command.Trails, command.IsDeleted);
            _mountainRepository.Store(tempMountain);
            await _unitOfWork.Save();
        }
    }
}
