/*
DROP-DOWN Menu: create a click event on the dropdown button that toggles the menu to display.  remove the dropdown-hidden class from the button.
1. get the links from the DOM
2. for each link, create a JS object.
3. in the object, create a property that gets the actual menu. 
4. create a method on the object that toggles the .dropdown-hidden class of the menu.
*/

/*Solution Code without Objects

//const dropdown = document.querySelector('.dropdown-button');
//const menu = document.querySelector('.dropdown-content');
//
//dropdown.addEventListener('click', () => {
//    menu.classList.toggle('dropdown-hidden');
//});
*/

class Dropdown {
    
    constructor(dropdown) {
        this.dropdown = dropdown;
        this.menu = document.querySelector('.dropdown-content');
        this.dropdown.addEventListener('click', () => this.toggleMenu());
    }
    
    toggleMenu() {
        this.menu.classList.toggle('dropdown-hidden');
    }
}


let dropdown = document.querySelector('.dropdown-button');

dropdown = new Dropdown(dropdown);














//class Dropdown {
//  constructor(element) {
//    
//    // Assign this.element to the dropdown element
//    this.element;
//    
//    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
//    this.button = this.element.querySelector();
//    
//    // assign the reference to the ".dropdown-content" class found in the dropdown element
//    this.content;
//    
//    // Add a click handler to the button reference and call the toggleContent method.
//    this.button.addEventListener('click', () => {
//
//    })
//  }
//
//  toggleContent() {
//    
//    // Toggle the ".dropdown-hidden" class off and on
//    this.content;
//  }
//}
//
//
//// Nothing to do here, just study what the code is doing and move on to the Dropdown class
//let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));