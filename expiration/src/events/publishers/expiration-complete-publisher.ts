import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@msticketsapp/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
