import logo from './images/logo.png'

const content = document.querySelector('#content');

const renderHome = function(){
    const restLogo = document.createElement('img');
    const restHead = document.createElement('h1');
    const restDesc = document.createElement('p');

    restLogo.src = logo;
    restLogo.id = "logo";
    restLogo.alt = "Restaurant logo";

    restHead.textContent = "Sushi Kayto";

    restDesc.id = "description";
    restDesc.textContent = `Welcome to Sushi Kayto, where the art of sushi-making meets passion and 
            dedication. Our chefs craft each piece with precision and love, using only 
            the freshest ingredients and traditional techniques to bring you an 
            unforgettable dining experience. Join us on a journey through the flavors 
            of Japan, from classic rolls to innovative creations - let's roll out the 
            welcome mat and start your adventure!`;

    content.append(restLogo, restHead, restDesc);
};

export {renderHome};