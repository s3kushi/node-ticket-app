import { Subjects, Publisher, PaymentCreatedEvent } from '@msticketsapp/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
