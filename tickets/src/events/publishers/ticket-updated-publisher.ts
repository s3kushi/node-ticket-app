import { Publisher, Subjects, TicketUpdatedEvent } from '@msticketsapp/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
