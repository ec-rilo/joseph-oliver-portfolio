import './styles/reset.css';
import './styles/main.css';
import './modules/ham-btn.js';
import './modules/page-switch-logic.js';
import './modules/contact-pg-validation';
import './modules/photography-logic';
import './modules/nav-bar';
import photographyLogic from './modules/photography-logic';

if (!localStorage.getItem('pageArr')) {
  let homePage = 'home-pg';
  let aboutPage = 'about-me-pg';
  let photogPage = 'photography-pg';
  let contactPage = 'contact-pg';

  let pageArr = [];
  pageArr.push(homePage);
  pageArr.push(aboutPage);
  pageArr.push(photogPage);
  pageArr.push(contactPage);
  localStorage.setItem('pageArr', JSON.stringify(pageArr));
}

photographyLogic.addImgsToHTML();
