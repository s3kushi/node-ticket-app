import { Subjects, Publisher, OrderCancelledEvent } from '@msticketsapp/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
