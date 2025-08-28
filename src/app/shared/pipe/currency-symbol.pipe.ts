import { formatCurrency } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

import { ICurrency } from "../interface/property";

@Pipe({
  name: "currencySymbol",
})
export class CurrencySymbolPipe implements PipeTransform {
  public currency: number;
  public formateCurrency: string;

  transform(value: number, currencyValue: ICurrency) {
    if (currencyValue.currency === "USD") {
      this.currency = value * currencyValue.price;
      this.formateCurrency = formatCurrency(
        this.currency,
        "en_US",
        "$",
        "USD",
        "1.2-2",
      );
      return ` ${this.formateCurrency}`;
    } else if (currencyValue.currency === "INR") {
      this.currency = value * currencyValue.price;
      this.formateCurrency = formatCurrency(
        this.currency,
        "en_IN",
        "₹",
        "INR",
        "1.2-2",
      );
      return `${this.formateCurrency}`;
    } else if (currencyValue.currency === "EUR") {
      this.currency = value * currencyValue.price;
      this.formateCurrency = formatCurrency(
        this.currency,
        "en_EU",
        "€",
        "EUR",
        "1.2-2",
      );
      return `${this.formateCurrency}`;
    } else if (currencyValue.currency === "GBP") {
      this.currency = value * currencyValue.price;
      this.formateCurrency = formatCurrency(
        this.currency,
        "en-GB",
        "£",
        "GBP",
        "1.2-2",
      );
      return ` ${this.formateCurrency}`;
    }
    return;
  }
}
