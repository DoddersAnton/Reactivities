using AutoMapper;
using Persistence;
using MediatR;

namespace Application.Activities
{
    public class Delete
    {
         public class Command : IRequest
        {
            public Guid Id { get; set; }
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
               var activity = await _context.Activities.FindAsync(request.Id);

               _context.Remove(activity);
               await _context.SaveChangesAsync();

                return Unit.Value;

            }
        }



    }
}