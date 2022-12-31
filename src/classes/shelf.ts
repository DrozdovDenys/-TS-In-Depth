import { ShelfItem } from '../interfaces'

export default class Shelf<T extends ShelfItem> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    };

    getFirst(): T {
        return this.items[0];
    };

    find(title: string): T {
        return this.items.find((item: T )=> item.title === title);
    };

    printTitle(): void {
        this.items.forEach(item => console.log(item.title));
    }
}