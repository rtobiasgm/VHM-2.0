using Application.Interfaces;
using Application.Wrappers;
using MediatR;

namespace Application.Features.Users.Commands.Registration
{
    public class RegisterCommand : IRequest<Response<string>>
    {
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string ConfirmPassWord { get; set; }
        public string Origin { get; set; }
    }

    public class RegisterCommandHandler : IRequestHandler<RegisterCommand, Response<string>>
    {

        private readonly IAccountService _accountService;

        public RegisterCommandHandler(IAccountService accountService)
        {
            _accountService = accountService;
        }

        public async Task<Response<string>> Handle(RegisterCommand request, CancellationToken cancellationToken)
        {
            return await _accountService.RegisterAsync(new Dtos.Users.RegisterRequest
            {
                Email = request.Email,
                UserName = request.UserName,
                Password = request.Password,
                ConfirmPassWord = request.ConfirmPassWord,
                Name = request.Name,
                LastName = request.LastName
            }, request.Origin);
        }
    }

}
