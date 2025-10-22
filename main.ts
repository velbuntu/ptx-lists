/**
 * Custom blocks for list-like functionality inspired by Scratch.
 */
//% weight=100 color=#FF5733 icon="\uf03a" block="Better Lists"
namespace CustomLists {

    /**
     * Adds an item to the end of a list.
     * @param list The list to add the item to.
     * @param item The item to add, eg: "hello"
     */
    //% block="add %item to %list"
    //% list.shadow="variables_get" list.defl="list"
    //% weight=100
    export function addToList(item: any, list: any[]): void {
        list.push(item);
    }

    /**
     * Inserts an item into a list at a specified index.
     * @param list The list to insert the item into.
     * @param item The item to insert, eg: "world"
     * @param index The zero-based index at which to insert the item, eg: 0
     */
    //% block="in %list insert %item at #%index"
    //% list.shadow="variables_get" list.defl="list"
    //% index.min=0
    //% weight=90
    export function insertIntoList(list: any[], item: any, index: number): void {
        if (index >= 0 && index <= list.length) {
            list.splice(index, 0, item);
        }
    }

    /**
     * Replaces an item in a list at a specified index.
     * @param list The list to modify.
     * @param index The zero-based index of the item to replace, eg: 0
     * @param item The new item.
     */
    //% block="in %list replace item at #%index with %item"
    //% list.shadow="variables_get" list.defl="list"
    //% index.min=0
    //% weight=80
    export function replaceItemInList(list: any[], index: number, item: any): void {
        if (index >= 0 && index < list.length) {
            list[index] = item;
        }
    }

    /**
     * Gets an item from a list at a specified index.
     * @param list The list to get the item from.
     * @param index The zero-based index of the item to get, eg: 0
     */
    //% block="item at #%index of %list"
    //% list.shadow="variables_get" list.defl="list"
    //% index.min=0
    //% weight=70
    export function getItemFromList(index: number, list: any[]): any {
        if (index >= 0 && index < list.length) {
            return list[index];
        }
        return undefined;
    }

    /**
     * Removes an item from a list at a specified index (position).
     * @param list The list to remove the item from.
     * @param index The zero-based index of the item to remove, eg: 0
     */
    //% block="remove item at #%index of %list"
    //% list.shadow="variables_get" list.defl="list"
    //% index.min=0
    //% weight=60
    export function removeFromList(index: number, list: any[]): void {
        if (index >= 0 && index < list.length) {
            list.splice(index, 1);
        }
    }

    /**
     * Returns the number of items in a list.
     * @param list The list to get the length of.
     */
    //% block="length of %list"
    //% list.shadow="variables_get" list.defl="list"
    //% weight=50
    export function listLength(list: any[]): number {
        return list.length;
    }

    /**
     * Checks if a list contains a specific item.
     * @param list The list to check.
     * @param item The item to look for.
     */
    //% block="%list contains %item"
    //% list.shadow="variables_get" list.defl="list"
    //% weight=40
    export function listContains(list: any[], item: any): boolean {
        return list.indexOf(item) != -1;
    }

    /**
     * Removes all items from a list.
     * @param list The list to clear.
     */
    //% block="delete all of %list"
    //% list.shadow="variables_get" list.defl="list"
    //% weight=30
    export function deleteAllFromList(list: any[]): void {
        list.length = 0;
    }
}