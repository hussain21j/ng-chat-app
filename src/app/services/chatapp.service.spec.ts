import { TestBed } from '@angular/core/testing';

import { ChatappService } from './chatapp.service';

describe('ChatappService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatappService = TestBed.get(ChatappService);
    expect(service).toBeTruthy();
  });
});
