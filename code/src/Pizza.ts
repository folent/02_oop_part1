import {Consumable} from "./Consumable";

export class Pizza extends Consumable {
  numberOfSlices: number;
  slicesEaten: number;
  constructor(numberOfSlices: number, spoiled: boolean) {
    super("pizza", numberOfSlices, 0, false);
    this.numberOfSlices = numberOfSlices;
    this.spoiled = spoiled;
  }

  eat() {
    return this.use();
  }
}