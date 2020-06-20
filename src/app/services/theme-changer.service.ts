import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ThemeChangerService {
  /* BehaviorSubject holding theme status */
  private isDarkTheme$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  getIsDarkTheme(): Observable<boolean> {
    return this.isDarkTheme$.asObservable();
  }

  /* Emit isDarkTheme | true */
  activateDarkTheme() {
    this.isDarkTheme$.next(true);
  }

  /* Emit isDarkTheme | false */
  activateLightTheme() {
    this.isDarkTheme$.next(false);
  }
}
