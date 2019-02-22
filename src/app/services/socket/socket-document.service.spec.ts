import { TestBed } from '@angular/core/testing';

import { SocketDocumentService } from './socket-document.service';

describe('SocketDocumentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocketDocumentService = TestBed.get(SocketDocumentService);
    expect(service).toBeTruthy();
  });
});
