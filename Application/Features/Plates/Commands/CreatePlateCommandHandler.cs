using Application.Wrappers;
using MediatR;

namespace Application.Features.Plates.Commands
{
    public class CreatePlateCommandHandler : IRequest<Response<int>>
    {
    }
}
