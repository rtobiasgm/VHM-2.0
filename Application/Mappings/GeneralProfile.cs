using Application.Dtos;
using Application.Features.Customers.Commands.CreateCustomerCommand;
using AutoMapper;
using Domain.Entities;

namespace Application.Mappings
{
    public class GeneralProfile : Profile
    {
        public GeneralProfile()
        {

            CreateMap<Customer, CustomerDto>();

            CreateMap<CreateCustomerCommand, Customer>();
            
        }
    }
}
