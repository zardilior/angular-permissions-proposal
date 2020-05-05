import { InjectionToken } from '@angular/core';

export const FailedAccessServiceToken = new InjectionToken('FailedAccessService');
export interface FailedAccessService {
  failedAccess: (string) => void,
}
