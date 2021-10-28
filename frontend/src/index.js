import Error404Screen from './screens/Error404Screen.js';
import HomeScreen from './screens/HomeScreen.js';
import ProducScreen from './screens/ProductScreen.js';
import { parseRequestUrl } from './utils.js';
const routes = {
    '/': HomeScreen,
    '/product/:id': ProducScreen,
};
const router = async() =>{
    const request = parseRequestUrl();
    const pareseUrl = 
        (request.resource ? `/${request.resource}`: '/') +
        (request.id? '/:id': '') +
        (request.verb ? `/${request.verb}`: '');
    const screen = routes[pareseUrl]? routes[pareseUrl]: Error404Screen;
    const main = document.getElementById("main-container");
    main.innerHTML = await screen.render();
};
window.addEventListener('load', router);
window.addEventListener('hashchange', router);