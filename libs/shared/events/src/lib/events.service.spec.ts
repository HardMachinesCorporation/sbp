import { Test } from '@nestjs/testing';
import { EventsService } from './events.service';

describe('EventsService', () => {
  let service: EventsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [EventsService],
    }).compile();

    service = module.get(EventsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
