 LocalStorage is a web storage feature of JavaScript that lets you persist data by storing the data as a key:value pair.

 The toggle method will add the class if it is not present on the element, and remove the class if it is present on the element.


 The HTML dialog element has a showModal() method that can be used to display a modal dialog box on a web page.

 If the user clicks the Cancel button, you want to cancel the process and close the modal so the user can continue editing. The HTML dialog element has a close() method that can be used to close a modal dialog box on a web page.

  use the preventDefault() method to stop the browser from refreshing the page after submitting the form.

  The findIndex() array method finds and returns the index of the first element in an array that meets the criteria specified by a provided testing function. If no such element is found, the method returns -1.

  unshift() is an array method that is used to add one or more elements to the beginning of an array.

  splice() is an array method that modifies arrays by removing, replacing, or adding elements at a specified index, while also returning the removed elements. It can take up to three arguments: the first one is the mandatory index at which to start, the second is the number of items to remove, and the third is an optional replacement element.

  For instance, the setItem() method is used to save an item, and the getItem() method retrieves the item. To delete a specific item, you can utilize the removeItem() method, or if you want to delete all items in the storage, you can use clear().

  localStorage offers methods for saving, retrieving, and deleting items. The items you save can be of any JavaScript data type.

  The item you retrieve is a string, as you saved it with JSON.stringify(). To view it in its original form before saving, you need to use JSON.parse().

  Using localStorage.clear() won't just delete a single item from local storage but will remove all items.

Remove localStorage.removeItem() and use localStorage.clear() instead.