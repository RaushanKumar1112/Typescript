export class Payment {
    constructor(c, d, a) {
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }
    // constructor (
    //   readonly recipients: string,
    //   private details: string,
    //   public amount: number,
    //  ){}
    format() {
        return `${this.recipient} is owed ₹${this.amount} for ${this.details}`;
    }
}
