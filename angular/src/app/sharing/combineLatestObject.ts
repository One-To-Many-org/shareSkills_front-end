import {
  combineLatest,
  isObservable,
  Observable,
  ObservableInput,
  of,
} from 'rxjs';
import { map } from 'rxjs/operators';

export function combineLatestObject<
  T extends { [index: string]: Observable<any> | Promise<any> | any }
>(
  dict: T
): Observable<
  {
    [K in keyof T]: T[K] extends Observable<infer U>
      ? U
      : T[K] extends Promise<infer V>
      ? V
      : T[K];
  }
> {
  const keys = Object.keys(dict);
  const vals = keys.map((key) => {
    const val = dict[key];
    if (val instanceof Promise || isObservable(val)) {
      return val;
    }
    return of(val);
  });

  return combineLatest(...vals).pipe(
    map((result) => {
      return result.reduce((acc, val, index) => {
        acc[keys[index]] = val;
        return acc;
      }, {});
    })
  );
}
