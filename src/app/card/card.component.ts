import { Component, OnInit, Input } from "@angular/core";
import { Subscription } from "rxjs";
import { ThemeChangerService } from "../services/theme-changer.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  /* Passing Data from the parent component to use the same component for any card data */
  @Input("header")
  private header: string;
  @Input("title")
  private title: string;
  @Input("subtitle")
  private subtitle: string;

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
}
