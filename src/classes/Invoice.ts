import { HasFormatter } from "../interfaces/HasFormatter";

export class Invoice implements HasFormatter {
  readonly clients: string;
  private details: string;
  public amount: number;

  constructor(c: string, d: string, a: number) {
    this.clients = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.clients} owes ₹${this.amount} for ${this.details}`;
  }
}
