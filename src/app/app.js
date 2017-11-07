import 'src/assets/styles/main.css';
import Home from './home/home.component';

let home = new Home('Hello world!');
document.querySelector('.main').innerHTML = home.greet();
