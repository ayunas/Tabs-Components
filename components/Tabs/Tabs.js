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
        TweenMax.from(this.item, 3, {opacity:0});
    }
}
const tabs = document.querySelectorAll('.tabs-link');
const items = document.querySelectorAll('.tabs-item');

tabs.forEach(tab => new Tab(tab));



