/*
1. provide a linking mechanism for the tab links and the tab items using data-tab in the html
2. get all the tabs from the DOM
3. for each DOM tab, create a JS object component
4. in the object constructor, create a property that gets the item from the DOM
5. turn that property into another JS object or subcomponent.
6. in the item subcomponent, create a method that toggles the selected class from the clicked tab link.  ...........
*/

class Tab {
    constructor(tab) {
        this.tab = tab;
        this.data = tab.dataset.tab;
        this.item = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
        this.tab.addEventListener('click', () => this.select());
    }
    
    select() {
        console.log('i have been clicked!');
        tabs.forEach( tab => tab.classList.remove('tabs-link-selected'));
        items.forEach( item => item.classList.remove('tabs-item-selected'));
        
        this.tab.classList.add('tabs-link-selected');
        this.item.classList.add('tabs-item-selected');
    }
}
const tabs = document.querySelectorAll('.tabs-link');
const items = document.querySelectorAll('.tabs-item');

tabs.forEach(tab => new Tab(tab));
















//
//class TabLink {
//  constructor(element) {
//    // Assign this.element to the passed in DOM element
//    // this.element;
//    
//    // Get the custom data attribute on the Link
//    // this.data;
//    
//    // Using the custom data attribute get the associated Item element
//    // this.itemElement;
//    
//    // Using the Item element, create a new instance of the TabItem class
//    // this.tabItem;
//    
//    // Add a click event listener on this instance, calling the select method on click
//
//  };
//
//  select() {
//    // Get all of the elements with the tabs-link class
//    // const links;
//
//    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
//    // Array.from(links).forEach();
//
//    // Add a class named "tabs-link-selected" to this link
//    // this.element;
//    
//    // Call the select method on the item associated with this link
//
//  }
//}
//
//class TabItem {
//  constructor(element) {
//    // Assign this.element to the passed in element
//    // this.element;
//  }
//
//  select() {
//    // Select all ".tabs-item" elements from the DOM
//    // const items;
//
//    // Remove the class "tabs-item-selected" from each element
//    
//    // Add a class named "tabs-item-selected" to this element
//    //this.element;
//  }
//}
//
///* START HERE: 
//
//- Select all classes named ".tabs-link" and assign that value to the links variable
//
//- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList
//
//- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter
//
//*/
//
//links = document.querySelectorAll();