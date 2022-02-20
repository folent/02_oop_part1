import {Item} from "./Item";
import {ItemComparator} from "./ItemComparator";
import {ItemWeightComparator} from "./ItemWeightComparator";

export class Inventory {
  items: Array<Item>
  sort(): void;
  sort(comparator?: ItemWeightComparator): void {
    if (comparator) {
      this.items = this.items.sort(comparator.compare);
    } else {
      this.items = this.items.sort((a, b) => b.weight - b.weight);
    }
  }

  addItem(input: Item) {
    this.items.push(input);
  }

  toString(): string {
    return this.items.join(',');
  }
}