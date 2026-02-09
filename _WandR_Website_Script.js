// JavaScript Document
const home_bn = document.querySelector('#home');
const overlay_pg = document.querySelector('#vid-overlay');
const about_bn = document.querySelector('#about');
const about_pg = document.querySelector('#about-page');
const portfolio_bn = document.querySelector('#portfolio');
const portfolio_pg = document.querySelector('#portfolio-page');
const contact_bn = document.querySelector('#contact');
const contact_pg = document.querySelector('#contact-page');

window.addEventListener("load", function() {
	var loader = this.document.getElementById("Loader_overlay");
	loader.style.display = "none";
})


// about_bn.addEventListener('click', (e) => {
// 	about_pg.style.display = 'flex';
// 	about_bn.style.color = '#f2c779';
// 	overlay_pg.style.display = 'none';
// 	home_bn.style.color = '#f1e7d7';
// 	portfolio_pg.style.display = 'none';
// 	portfolio_bn.style.color = '#f1e7d7';
// 	contact_pg.style.display = 'none';

// });

// home_bn.addEventListener('click', (e) => {
// 	about_pg.style.display = 'none';
// 	about_bn.style.color = '#f1e7d7';
// 	overlay_pg.style.display = 'flex';
// 	home_bn.style.color = '#f2c779';
// 	portfolio_pg.style.display = 'none';
// 	portfolio_bn.style.color = '#f1e7d7';
// 	contact_pg.style.display = 'none';
// 	contact_bn.style.color = '#f1e7d7';
// });

// portfolio_bn.addEventListener('click', (e) => {
// 	about_pg.style.display = 'none';
// 	about_bn.style.color = '#f1e7d7';
// 	overlay_pg.style.display = 'none';
// 	home_bn.style.color = '#f1e7d7';
// 	portfolio_pg.style.display = 'flex';
// 	portfolio_bn.style.color = '#f2c779';
// 	contact_pg.style.display = 'none';
// 	contact_bn.style.color = '#f1e7d7';
// });

// contact_bn.addEventListener('click', (e) => {
// 	about_pg.style.display = 'none';
// 	about_bn.style.color = '#f1e7d7';
// 	overlay_pg.style.display = 'none';
// 	home_bn.style.color = '#f1e7d7';
// 	portfolio_pg.style.display = 'none';
// 	portfolio_bn.style.color = '#f1e7d7';
// 	contact_pg.style.display = 'flex';
// 	contact_bn.style.color = '#f2c779';
// });
