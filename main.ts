/**
 * M Lists Extension
 */
//% weight=100 color=#0fbc11 icon="\uf03a"
namespace MLists {
    let allLists: { [key: string]: string[] } = {};

    /**
     * Creates a new, empty list with the specified name.
     * @param name The name of the new list.
     */
    //% block="Create list %name"
    //% weight=100
    export function createList(name: string): void {
        allLists[name] = [];
    }

    /**
     * Adds an item to the end of a list.
     * @param name The name of the list.
     * @param value The item to add.
     */
    //% block="add %value to %name"
    //% weight=90
    export function addToList(name: string, value: any): void {
        if (!allLists[name]) {
            createList(name);
        }
        allLists[name].push(value.toString());
    }

    /**
     * Removes an item from a specified index in a list.
     * @param name The name of the list.
     * @param index The 1-based index of the item to remove.
     */
    //% block="remove item %index of %name"
    //% weight=80
    //% index.min=1
    export function removeFromList(name: string, index: number): void {
        if (allLists[name] && index > 0 && index <= allLists[name].length) {
            allLists[name].splice(index - 1, 1);
        }
    }

    /**
     * Returns the number of items in a list.
     * @param name The name of the list.
     */
    //% block="%name length"
    //% weight=70
    export function listLength(name: string): number {
        if (allLists[name]) {
            return allLists[name].length;
        }
        return 0;
    }

    /**
     * Inserts an item at a specific position in a list.
     * @param name The name of the list.
     * @param index The 1-based index to insert at.
     * @param value The item to insert.
     */
    //% block="insert %value at %index of %name"
    //% weight=60
    //% index.min=1
    export function insertIntoList(name: string, index: number, value: any): void {
        if (!allLists[name]) {
            createList(name);
        }
        if (index > 0 && index <= allLists[name].length + 1) {
            allLists[name].splice(index - 1, 0, value.toString());
        }
    }

    /**
     * Replaces an item at a specific index in a list.
     * @param name The name of the list.
     * @param index The 1-based index of the item to replace.
     * @param value The new item.
     */
    //% block="replace item %index of %name with %value"
    //% weight=50
    //% index.min=1
    export function replaceItem(name: string, index: number, value: any): void {
        if (allLists[name] && index > 0 && index <= allLists[name].length) {
            allLists[name][index - 1] = value.toString();
        }
    }

    /**
     * Gets an item from a specific index in a list.
     * @param name The name of the list.
     * @param index The 1-based index of the item to get.
     */
    //% block="get item %index of %name"
    //% weight=40
    //% index.min=1
    export function getItem(name: string, index: number): string {
        if (allLists[name] && index > 0 && index <= allLists[name].length) {
            return allLists[name][index - 1];
        }
        return "";
    }

    /**
     * Checks if a list contains a specific item.
     * @param name The name of the list.
     * @param value The item to check for.
     */
    //% block="%name contains %value"
    //% weight=30
    export function listContains(name: string, value: any): boolean {
        if (allLists[name]) {
            return allLists[name].indexOf(value.toString()) > -1;
        }
        return false;
    }

    /**
     * Deletes all items from a list.
     * @param name The name of the list.
     */
    //% block="delete all of %name"
    //% weight=20
    export function clearList(name: string): void {
        if (allLists[name]) {
            allLists[name] = [];
        }
    }
    
    /**
     * Displays the items of a list on the micro:bit screen.
     * @param name The name of the list to show.
     */
    //% block="show list %name"
    //% weight=10
    export function showList(name: string): void {
        if (allLists[name]) {
            for (let item of allLists[name]) {
                basic.showString(item);
                basic.pause(200);
            }
        } else {
            basic.showIcon(IconNames.Sad);
        }
    }
}