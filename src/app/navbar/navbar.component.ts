import { Component, OnInit, OnDestroy } from "@angular/core";
import { ThemeChangerService } from "../services/theme-changer.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, OnDestroy {
  isDarkTheme = true;
  subscription: Subscription;
  /** Injecting the ThemeChangerService in order to retrieve DarkTheme status & toggle Dark-Light Theme  */
  constructor(private themeChangerService: ThemeChangerService) {}

  ngOnInit() {
    /** Listening to the themeChangerService isDarkTheme$ changes  */

    this.subscription = this.themeChangerService
      .getIsDarkTheme()
      .subscribe(isDarkTheme => (this.isDarkTheme = isDarkTheme));
  }

  /* Unsubscribe inside of ngOnDestory which gets called during the destruction of the component */
  ngOnDestroy() {
    /** Remove the subscription when we no longer need it to avoid memory leak */
    this.subscription.unsubscribe();
  }

  toggleTheme() {
    console.log("yow");

    if (this.isDarkTheme) {
      this.themeChangerService.activateLightTheme();
    } else {
      this.themeChangerService.activateDarkTheme();
    }
  }
}
