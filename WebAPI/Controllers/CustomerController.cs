using Application.Features.Customers.Commands.CreateCustomerCommand;
using Application.Features.Customers.Commands.DeleteCustomerCommand;
using Application.Features.Customers.Commands.UpdateCustomerCommand;
using Application.Features.Customers.Queries.GetAllCustomers;
using Application.Features.Customers.Queries.GetCustomerById;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly IMediator _mediator;
        public CustomerController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _mediator.Send(new GetAllCustomersQuery()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await _mediator.Send(new GetCustomerByIdQuery { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> Post(CreateCustomerCommand command)
        {
            return Ok(await _mediator.Send(command));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, UpdateCustomerCommand command)
        {
            if (id != command.Id)
                return BadRequest();

            return Ok(await _mediator.Send(command));
        }

        [HttpDelete ("{id}")]
        public async Task<IActionResult> Put(int id)
        {
            return Ok(await _mediator.Send(new DeleteCustomerCommand { Id = id}));
        }
    }
}
