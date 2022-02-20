import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    static numberOfItems:number = 0;
    id: number;
    value: number;
    name: string;
    weight: number
    static get NumberOfItems() {
        return id;
    }

    protected constructor(name: string, value: number, weight: number) {
        this.name = name;
        this.value = value;
        this.weight = weight;
        this.id = id;
        id++;
    }
    public compareTo(other: Item): number {
        if(this.value > other.value) {
            return 1;
        }
        if(this.value === other.value) {
            if(this.name > other.name) {
                return 1;
            }
        }
        return -1;
    }

    toString(): string {
        return `${this.name} − Value: ${this.value}, Weight: ${this.weight}`
    }

    static reset(): void {
        id = 0;
    }

    use() {

    }
}
