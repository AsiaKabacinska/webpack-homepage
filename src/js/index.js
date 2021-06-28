import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

// console.log('HELLO 🚀')
// alert("Wiaj drogi użytkowniku, na mojej cudownej stronie :)))");

// var name = "Asiula";
// var age = 28;

// console.log(`Cześć ! Mam na imię ${name} i mam ${age} lata `);

// let hello = document.querySelector(".headings__h1--hello");
// console.log(hello);

// hello.innerHTML='Siemaneczko, zmiana planów! ;-)'

// let ipsum = document.querySelector('.headings__h2');
// ipsum.innerHTML = 'Mała zamiana';

//FUNKCJA WITACJĄCA ODWIEDZJĄCYCH STRONĘ :)
// function hello (name, age){
// //    console.log (`Cześć jestem  ${name}  i mam  ${age}  lat`);
// // console.log ('Cześć jestem ' + name + 'i mam '+ age );
// return alert (`Cześć jestem ${name} i mam  ${age} lat, a Ty ?? :-)`);
// }
// hello ('Asia', 28);
// const hamburger = document.querySelector(".hamburger--js");

// hamburger.addEventListener("click", () => {
//   const nav = document.querySelector(".navigation--js");
//   nav.classList.toggle("navigation--open");
// });

console.log('hello world');
import moment from 'moment';
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

const startOfDay = moment().startOf('day').fromNow();
const timePlaceholder = document.querySelector('.time--js');
timePlaceholder.innerHTML= startOfDay; 

// const Day = moment().format('MMMM Do YYYY, h:mm:ss a');s
// const timePlaceholder = document.querySelector('.time--js');
// timePlaceholder.innerHTML=Day; 

