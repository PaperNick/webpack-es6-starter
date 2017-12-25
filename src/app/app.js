import 'src/assets/styles/main.css';
import HomeComponent from './home/home.component';

let homeComponent = new HomeComponent('Hello world!');
document.querySelector('.main').innerHTML = homeComponent.render();
