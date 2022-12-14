using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;

            }


            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Activities.Update(_mapper.Map<Activity>(request.Activity));

                await _context.SaveChangesAsync();

                return Unit.Value;

            }
        }

    }
}