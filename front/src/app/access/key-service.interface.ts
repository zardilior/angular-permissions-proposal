import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';

export const KeyServiceToken = new InjectionToken('KeyService');
export interface KeyService {
  keyObservable: Observable<string>
}
