/*
DROP-DOWN Menu: create a click event on the dropdown button that toggles the menu to display.  remove the dropdown-hidden class from the button.
1. get the drop down button from the DOM
2. create a JS object for the drop down button.
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
        this.menuLinks = document.querySelectorAll('.dropdown-link');
        this.dropdown.addEventListener('click', () => this.toggleMenu());
    }
    
    toggleMenu() {
        this.menu.classList.toggle('dropdown-hidden');
        TweenMax.from(this.menu, .5, {opacity: 0, scaleY:0, scaleX:0});
        TweenMax.staggerFrom(this.menuLinks, 1, {opacity: 0}, .1);
        
    }
}

let dropdown = document.querySelector('.dropdown-button');

dropdown = new Dropdown(dropdown);


