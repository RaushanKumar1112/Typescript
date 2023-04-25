import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("Naruto", "Shinobi work", 50000);
// docTwo = new Payment("Gaara", "Rescuing work", 35000);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// let invOne = new Invoice("mario", "work on website", 30000);
// let invTwo = new Invoice("luffy", "work on website", 40000);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// console.log(invoices);

// const form = document.querySelector('form')!;
//  we use ! at the end because we are sure that the tag is available

// If multiple similar tags is been used then we can select that element via class name and then typecast it
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLSelectElement;
const details = document.querySelector("#details") as HTMLSelectElement;
const amount = document.querySelector("#amount") as HTMLSelectElement;

const ul = document.querySelector("ul")!;

const instance = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(toFrom.value, details.value, Number(amount.value));
  } else {
    doc = new Payment(toFrom.value, details.value, Number(amount.value));
  }
  // console.log(doc);
  instance.render(doc, type.value, "end");
});
