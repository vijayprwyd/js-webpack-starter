import './index.css';
import img from './assets/react.png';

const divNode = document.createElement('div');
divNode.classList.add('green');
divNode.innerText = 'Some text';

const imgNode = document.createElement('img');
imgNode.setAttribute('src', img);
imgNode.classList.add('image');

document.getElementById('root').appendChild(divNode);
document.getElementById('root').appendChild(imgNode);
