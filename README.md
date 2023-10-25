# List Randomizer DOM Widget

![List Randomizer DOM Widget](name-randomizer.gif)

## Description

A simple list randomizer that takes in items from the user and provides various operations on them.

- The result is displayed in a numbered list, making it easy for users to track and manage the items.
- The List Randomizer provides an intuitive interface for users to manage a list of items with ease.
- With the power of JavaScript, the project offers various functionalities, making name management a breeze.

## Features

1. **Name Input:** Users can input names into a designated field.
2. **Name Management:**
   - **Add:** Adds a name to the list.
   - **Randomize:** Shuffles the list of names.
   - **Sort:** Organizes the names alphabetically.
   - **Reverse:** Reverses the order of the names.
   - **Copy:** Copies the entire list to the clipboard.
   - **Remove:** Deletes the last name from the list.
   - **Clear:** Empties the entire list.

## JavaScript Techniques

1. **DOM Manipulation:** The code extensively uses DOM manipulation techniques to interact with various elements on the page, such as the form, input field, list, and buttons.
2. **Event Listeners:** Multiple event listeners are set up to capture user actions and trigger corresponding functions.
3. **Array Manipulations:** The code takes advantage of various array methods (like `push`, `pop`, `sort`, `reverse`) to effectively manage the list of names.
4. **Animations:** The script dynamically adds an animation class to list items when they are added, providing a visually pleasing effect to the user.
5. **Clipboard API:** The `navigator.clipboard.writeText()` method is employed to copy the list of names to the user's clipboard.

## The JavaScript functionality for the list randomizer project is as follows:

1. **DOM Selection:** The script starts by selecting various elements from the DOM such as the form, input field, list, and several buttons.
2. **Names Array:** An array `names` is initialized to store the names provided by the user.
3. **Functions:**
   - `addName()`: Adds a name to the names array, ensuring no duplicates or empty values.
   - `updateNames()`: Updates the display list with the current names. It uses a fade-in animation for new names.
   - `copyNames()`: Copies the list of names to the clipboard.
4. **Event Listeners:** The script has several event listeners for various actions:

   - Adding a name when the form is submitted or the add button is clicked.
   - Randomizing the list of names.
   - Clearing the entire list.
   - Removing the last name from the list.
   - Sorting the names alphabetically.
   - Reversing the list of names.
   - Copying the list to the clipboard.

5. **Array Manipulations:** The script makes use of several array methods like `push`, `sort`, `pop`, and `reverse` to manipulate the list of names based on user actions.
