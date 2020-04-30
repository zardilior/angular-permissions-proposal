import { Observable } from 'rxjs';
export interface KeyService {
  keyObservable: Observable<string>
}
