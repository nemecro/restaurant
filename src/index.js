import "./styles.css";
import { renderHome } from "./home.js";
import {renderMenu} from "./menu.js";

const content = document.querySelector('#content');
const buttons = document.querySelectorAll('nav>button');

const clearContent = function(){
    content.innerHTML = '';
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        clearContent();
        if (button.id === 'home-btn'){
            renderHome();
        } else if (button.id === 'menu-btn'){
            renderMenu();
        }
    });
})

renderHome();

