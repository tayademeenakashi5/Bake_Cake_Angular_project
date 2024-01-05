import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize isLoggedIn to false', () => {
    expect(service.isLoggedIn).toBeFalse();
  });

  it('should set isLoggedIn to true on successful login', () => {
    service.login('welcome@bmc', 'bmc@2023');
    expect(service.isLoggedIn).toBeTrue();
  });

  it('should not set isLoggedIn to true on unsuccessful login', () => {
    service.login('invalidId', 'invalidPassword');
    expect(service.isLoggedIn).toBeFalse();
  });
});
