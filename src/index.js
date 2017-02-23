import styles from './styles/main.scss';

const box = document.getElementById('box');

box.innerHTML += `<p class='${styles.test}'>Here's some sample text.</p>`

console.log('working');
