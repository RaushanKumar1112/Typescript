export class Invoice {
    constructor(c, d, a) {
        this.clients = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.clients} owes ₹${this.amount} for ${this.details}`;
    }
}
