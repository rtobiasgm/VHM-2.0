using FluentValidation;

namespace Application.Features.Users.Commands.Registration
{
    public class RegisterCommandValidator : AbstractValidator<RegisterCommand>
    {
        public RegisterCommandValidator()
        {

            RuleFor(p => p.Email)
               .NotEmpty().WithMessage("{PropertyName} could not be empty")
               .MaximumLength(50).WithMessage("{PropertyName} cannot exceed {MaxLength} letters");

            RuleFor(p => p.UserName)
             .NotEmpty().WithMessage("{PropertyName} could not be empty")
             .MaximumLength(10).WithMessage("{PropertyName} cannot exceed {MaxLength} letters");

            RuleFor(p => p.Password)
             .NotEmpty().WithMessage("{PropertyName} could not be empty")
             .MaximumLength(15).WithMessage("{PropertyName} cannot exceed {MaxLength} letters");

            RuleFor(p => p.ConfirmPassWord)
             .NotEmpty().WithMessage("{PropertyName} could not be empty")
             .MaximumLength(15).WithMessage("{PropertyName} cannot exceed {MaxLength} letters")
             .Equal(p => p.Password).WithMessage("{PropertyName} should be equal as Password");
        }
    }
}
