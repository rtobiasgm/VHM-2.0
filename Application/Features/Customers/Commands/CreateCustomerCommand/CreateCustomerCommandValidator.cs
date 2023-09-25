using FluentValidation;

namespace Application.Features.Customers.Commands.CreateCustomerCommand
{
    public class CreateCustomerCommandValidator : AbstractValidator<CreateCustomerCommand>
    {
        public CreateCustomerCommandValidator()
        {
            RuleFor(p => p.Name)
            .NotEmpty().WithMessage("{PropertyName} is required")
            .NotNull().WithMessage("{PropertyName} cannot be null")
            .MinimumLength(3).WithMessage("{PropertyName} length minimun is {MinLength} letters"); ;

            RuleFor(p => p.LastName)
            .NotEmpty().WithMessage("{PropertyName} is required")
            .NotNull().WithMessage("{PropertyName} cannot be null")
            .MinimumLength(3).WithMessage("{PropertyName} length minimun is {MinLength} letters"); ;

            RuleFor(p => p.DocumentId)
            .NotEmpty().WithMessage("{PropertyName} is required")
            .NotNull().WithMessage("{PropertyName} cannot be null")
            .Length(11).WithMessage("{PropertyName} length should be {Length} letters");

            RuleFor(p => p.BirthDate)
            .NotEmpty().WithMessage("{PropertyName} is required")
            .NotNull().WithMessage("{PropertyName} cannot be null");

            RuleFor(p => p.PersonType)
            .NotEmpty().WithMessage("{PropertyName} is required")
            .NotNull().WithMessage("{PropertyName} cannot be null");

        }
    }
}
