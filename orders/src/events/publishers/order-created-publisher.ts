import { Publisher, OrderCreatedEvent, Subjects } from '@msticketsapp/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
