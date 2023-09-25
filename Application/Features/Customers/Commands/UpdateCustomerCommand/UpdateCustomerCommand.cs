using Application.Exceptions;
using Application.Interfaces;
using Application.Wrappers;
using AutoMapper;
using Domain.Entities;
using MediatR;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Application.Features.Customers.Commands.UpdateCustomerCommand
{
    public class UpdateCustomerCommand : IRequest<Response<int>>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string DocumentId { get; set; }
        public DateTime BirthDate { get; set; }
        public string PersonType { get; set; }
    }

    public class UpdateCustomerCommandHandler : IRequestHandler<UpdateCustomerCommand,Response<int>>
    {

        private readonly IRepositoryAsync<Customer> _repositoryAsync;
        private readonly IMapper _mapper;

        public UpdateCustomerCommandHandler(IRepositoryAsync<Customer> repositoryAsync, IMapper mapper)
        {
            _repositoryAsync = repositoryAsync;
            _mapper = mapper;
        }
        public async Task<Response<int>> Handle(UpdateCustomerCommand request, CancellationToken cancellationToken)
        {
            var customer = await _repositoryAsync.GetByIdAsync(request.Id);
            
            if (customer == null)
            {
                throw new KeyNotFoundException($"Record with id: {request.Id}, not found");
            }
            else
            {
                customer.Name = request.Name;
                customer.LastName = request.LastName;
                customer.DocumentId = request.DocumentId;
                customer.BirthDate = request.BirthDate;
                customer.PersonType = request.PersonType;

                await _repositoryAsync.UpdateAsync(customer);
                return new Response<int>(customer.Id);
            }

           
        }
    }
}
