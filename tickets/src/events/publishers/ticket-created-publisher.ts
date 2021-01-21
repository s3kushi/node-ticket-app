import { Publisher, Subjects, TicketCreatedEvent } from '@msticketsapp/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
