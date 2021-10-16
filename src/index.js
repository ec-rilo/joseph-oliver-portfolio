import './styles/reset.css';
import './styles/main.css';
import './modules/ham-btn.js';
import './modules/page-switch-logic.js';

let homePage = '.home-pg';
let menuPage = '.menu-pg';
let aboutPage = '.about-pg';

if (!localStorage.getItem('pageArr')) {
  let pageArr = [];
  pageArr.push(homePage);
  pageArr.push(menuPage);
  pageArr.push(aboutPage);
  localStorage.setItem('pageArr', JSON.stringify(pageArr));
}
