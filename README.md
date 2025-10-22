# M Lists for BBC micro:bit

A MakeCode extension for the BBC micro:bit that allows you to create and manipulate lists in a way that is familiar to Scratch users.

## Features

This extension provides a set of blocks to manage lists of strings and numbers. You can create multiple lists, add items to them, remove items, get the length of a list, and perform various other operations. This makes it much easier to work with collections of data in your micro:bit projects.

## Blocks

### Creating and Managing Lists
*   **Create list `[list]`**: Initializes a new, empty list with the specified name.

    ```blocks
    MLists.createList("my_list")
    ```

### Adding and Removing Items
*   **add `[thing]` to `[list]`**: Adds a new item to the end of the specified list.

    ```blocks
    MLists.addToList("my_list", "hello")
    ```
*   **insert `[thing]` at `[index]` of `[list]`**: Inserts an item at a specific position (1-based index) in the list.

    ```blocks
    MLists.insertIntoList("my_list", 1, "world")
    ```
*   **remove item `[index]` of `[list]`**: Removes the item at the given 1-based index from the list.

    ```blocks
    MLists.removeFromList("my_list", 1)
    ```
*   **delete all of `[list]`**: Removes all items from the specified list.

    ```blocks
    MLists.clearList("my_list")
    ```

### Accessing List Information
*   **`[list]` length**: Returns the number of items in the list.

    ```blocks
    let len = MLists.listLength("my_list")
    ```
*   **get item `[index]` of `[list]`**: Retrieves the item at the specified 1-based index.

    ```blocks
    let item = MLists.getItem("my_list", 1)
    ```
*   **replace item `[index]` of `[list]` with `[thing]`**: Replaces an existing item at a given 1-based index with a new item.

    ```blocks
    MLists.replaceItem("my_list", 1, "new item")
    ```
*   **`[list]` contains `[thing]`**: Checks if a list contains a specific item and returns `true` or `false`.

    ```blocks
    if (MLists.listContains("my_list", "hello")) {
    	
    }
    ```

### Displaying Lists
*   **show list `[list]`**: Scrolls the items of the list on the micro:bit's LED display.

    ```blocks
    MLists.showList("my_list")
    ```

## How to Use

1.  Open the [MakeCode Editor for micro:bit](https://makecode.microbit.org/).
2.  Click on **Advanced** and then **Extensions**.
3.  Paste the GitHub repository URL for this extension and click search.
4.  Click on the extension to add it to your project.
5.  You will now see a new "M Lists" category in the block toolbox.

## License

MIT License

Copyright (c) 2023 Google

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT
WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.