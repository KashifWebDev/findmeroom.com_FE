import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { ICurrency } from "../../../../../shared/interface/property";
import { PropertyService } from "../../../../../shared/services/property.service";
import { ClickOutsideDirective } from "../../../../directive/outside.directive";
import { FeatherIcons } from "../../../ui/feather-icons/feather-icons";

@Component({
  selector: "app-currency",
  imports: [FeatherIcons, CommonModule, ClickOutsideDirective],
  templateUrl: "./currency.html",
  styleUrls: ["./currency.scss"],
})
export class Currency {
  private propertyService = inject(PropertyService);

  public currencyOpen: boolean = false;

  public currencies = [
    {
      name: "Dollar",
      currency: "USD",
      symbol: "$",
      price: 1, // price of usd
    },
    {
      name: "Euro",
      currency: "EUR",
      symbol: "€",
      price: 0.95, // price of euro
    },
    {
      name: "Rupees",
      currency: "INR",
      symbol: "₹",
      price: 83.22, // price of inr
    },
    {
      name: "Pound",
      currency: "GBP",
      symbol: "£",
      price: 0.82, // price of euro
    },
  ];

  openCurrency() {
    this.currencyOpen = !this.currencyOpen;
  }

  changeCurrency(currency: ICurrency) {
    this.propertyService.Currency = currency;
    if (currency) {
      localStorage.setItem("currency", JSON.stringify(currency));
    }
    this.currencyOpen = false;
  }
}
