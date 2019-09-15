import { ReferenceItem } from "./reference-item";
import { positiveInteger } from "../decorators";

export default class Encyclopedia extends ReferenceItem {
  private _copies: number;

  @positiveInteger
  get copies() {
    return this._copies;
  }

  set copies(value: number) {
    this._copies = value;
  }

  constructor(newTitle: string, newYear: number, public edition: number) {
    super(newTitle, newYear);
  }

  printItem() {
    super.printItem();
    console.log(`Edition: ${this.edition} (${this.year})`)
  }

  printCitation() {
    console.log(`${this.title} - ${this.year}`);
  }
}