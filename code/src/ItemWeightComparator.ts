import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
    constructor() {

    }
    public compare(first: Item, second: Item) {
        if(first.weight > second.weight) {
            return 1;
        }
        if(first.weight === second.weight) {
            return first.compareTo(second);
        }
        return -1;
    }
}
