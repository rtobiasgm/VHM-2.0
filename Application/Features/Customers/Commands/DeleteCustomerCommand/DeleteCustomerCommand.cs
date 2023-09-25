using Application.Exceptions;
using Application.Interfaces;
using Application.Wrappers;
using Domain.Entities;
using MediatR;

namespace Application.Features.Customers.Commands.DeleteCustomerCommand
{
    public class DeleteCustomerCommand : IRequest<Response<int>>
    {
        public int Id { get; set; }
    }

    public class DeleteCustomerCommandHandler : IRequestHandler<DeleteCustomerCommand, Response<int>>
    {
        private readonly IRepositoryAsync<Customer> _repositoryAsync;
        public DeleteCustomerCommandHandler(IRepositoryAsync<Customer> repositoryAsync)
        {
            _repositoryAsync = repositoryAsync;
        }
        public async Task<Response<int>> Handle(DeleteCustomerCommand request, CancellationToken cancellationToken)
        {
            var customer = await _repositoryAsync.GetByIdAsync(request.Id);

            if (customer == null)
            {
                throw new KeyNotFoundException($"Record with id: {request.Id}, not found");
            }
            else
            {
                await _repositoryAsync.DeleteAsync(customer);
                return new Response<int>(customer.Id);
            }
        }
    }
}
