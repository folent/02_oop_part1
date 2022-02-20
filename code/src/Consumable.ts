import {Item} from "./Item";

export class Consumable extends Item {
  consumed: boolean;
  spoiled: boolean;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);
    this.consumed = false;
    this.spoiled = spoiled;
  }

  eat(): string {
    if (!this.consumed && !this.spoiled) {
      return `There is nothing left of the ${this.name} to consume.`
    }

    if(this.spoiled) {
      return `You eat the ${this.name}. \nYou feel sick.;`
    }

    return `You eat the ${this.name}.`
  }

  use(): string {
    return this.eat();
  }

  setConsumed(consumed: boolean): void {
    this.consumed = consumed;
  }

  isConsumed(): boolean {
    return this.consumed;
  }

}