using Application.Dtos;
using Application.Interfaces;
using Application.Wrappers;
using AutoMapper;
using Domain.Entities;
using MediatR;

namespace Application.Features.Customers.Queries.GetCustomerById
{
    public class GetCustomerByIdQuery : IRequest<Response<CustomerDto>>
    {
        public int Id { get; set; }

        public class GetCustomerByIdQueryHandler : IRequestHandler<GetCustomerByIdQuery, Response<CustomerDto>>
        {
            private readonly IRepositoryAsync<Customer> _repositoryAsync;
            private readonly IMapper _mapper;

            public GetCustomerByIdQueryHandler(IRepositoryAsync<Customer> repositoryAsync, IMapper mapper)
            {
                _repositoryAsync = repositoryAsync;
                _mapper = mapper;
            }

            public async Task<Response<CustomerDto>> Handle(GetCustomerByIdQuery request, CancellationToken cancellationToken)
            {
               var customer = await _repositoryAsync.GetByIdAsync(request.Id);

                if (customer == null)
                {
                    throw new KeyNotFoundException($"Record not found with id {request.Id}");
                }
                else
                {
                    var dto = _mapper.Map<CustomerDto>(customer);
                    return new Response<CustomerDto>(dto);
                }              
            }
        }
    }
}
