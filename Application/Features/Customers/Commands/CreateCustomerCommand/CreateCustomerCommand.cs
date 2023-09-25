using Application.Interfaces;
using Application.Wrappers;
using AutoMapper;
using Domain.Entities;
using MediatR;

namespace Application.Features.Customers.Commands.CreateCustomerCommand
{
    public class CreateCustomerCommand : IRequest<Response<int>>
    {
        public string Name { get; set; }
        public string LastName { get; set; }
        public string DocumentId { get; set; }
        public DateTime BirthDate { get; set; }
        public string PersonType { get; set; }
    }

    public class CreateCustomerCommandHandler : IRequestHandler<CreateCustomerCommand, Response<int>>
    {

        private readonly IRepositoryAsync<Customer> _repositoryAsync;
        private readonly IMapper _mapper;

        public CreateCustomerCommandHandler(IRepositoryAsync<Customer> repositoryAsync, IMapper mapper)
        {
            _repositoryAsync = repositoryAsync;
            _mapper = mapper;
        }
        public async Task<Response<int>> Handle(CreateCustomerCommand request, CancellationToken cancellationToken)
        {
           var customerMapRecord = _mapper.Map<Customer>(request);
           var data = await _repositoryAsync.AddAsync(customerMapRecord);

           return new Response<int>(data.Id);
        }
    }
}
