document.querySelector('html').setAttribute("lang", "en");

document.head.appendChild(document.createElement("meta"));

document.querySelector('meta').setAttribute("charset", "UTF-8");

document.head.appendChild(document.createElement("link"));

document.querySelector('link').setAttribute("href", "https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&display=swap");

document.querySelector('link').setAttribute("rel", "stylesheet");

// сброс стилей body

document.querySelector('body').style.cssText = "margin: 0px";

//content

let content = document.createElement("div");

document.body.appendChild(content);

content.setAttribute("class", "content");

document.querySelector('.content').style.cssText = 'width: 1200px; margin: 0px auto;';

//header

let header = document.createElement("header");

content.appendChild(header);

header.setAttribute("class", "header");

document.querySelector('.header').style.cssText = 'height: 250px;';

//h1

let h1 = document.createElement("h1");

h1.innerHTML = "Choose Your Option";

header.appendChild(h1);

h1.setAttribute("class", "h1");

document.querySelector('.h1').style.cssText = 'margin: 120px 0px 0px; text-align: center; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25); font-size: 50px; line-height:70px; color: #212121; font-family: Arvo, serif;';

// p1

let p1 = document.createElement("p");

p1.innerHTML = "But I must explain to you how all this mistaken idea of denouncing";

header.appendChild(p1);

p1.setAttribute("class", "p1");

document.querySelector('.p1').style.cssText = 'margin: 0px; text-align: center; font-size: 30px; line-height: 35px; color: #9FA3A7; font-family: Open Sans, sans-serif;';

// options

let options = document.createElement("div");

content.appendChild(options);

options.setAttribute("class", "options");

document.querySelector('.options').style.cssText = 'display:flex;';


// option1

let option1 = document.createElement("div");

options.appendChild(option1);

option1.setAttribute("class", "option one");




let option1h3 = document.createElement("h3");

option1h3.innerHTML = "Freelancer";

option1.appendChild(option1h3);

option1h3.setAttribute("class", "option__h3");




let option1p1 = document.createElement("p");

option1p1.innerHTML = "Initially designed to";

option1.appendChild(option1p1);

option1p1.setAttribute("class", "option__subtitle");



let option1p2 = document.createElement("p");

option1p2.innerHTML = "But I must explain to you how all this mistaken idea of denouncing ";

option1.appendChild(option1p2);

option1p2.setAttribute("class", "option__text");

document.querySelector('.option__text').style.cssText = '';


let option1a = document.createElement("a");

option1a.innerHTML = "Start here";

option1.appendChild(option1a);

option1a.setAttribute("class", "option__btn");

document.querySelector('.option__btn').style.cssText = '';


// option2

let option2 = document.createElement("div");

options.appendChild(option2);

option2.setAttribute("class", "option two");



document.querySelectorAll('.option').forEach(function(el, i, arr){ 
    el.style.cssText = 'display:flex; flex-direction: column; width: 50%; border: 1px solid #E8E9ED; align-items: center;'  
});

document.querySelector('.two').style.setProperty('border-radius', '0px 5px 5px 0px');

document.querySelector('.one').style.setProperty('border-radius', '5px 0px 0px 5px');


let option2h3 = document.createElement("h3");

option2h3.innerHTML = "Studio";

option2.appendChild(option2h3);

option2h3.setAttribute("class", "option__h3");

document.querySelectorAll('.option__h3').forEach(function(el, i, arr){ 
    el.style.cssText = 'font-family: Montserrat; font-style: normal; font-weight: bold; font-size: 25px; letter-spacing: 2.4px; color: #9FA3A7; margin-top: 80px;'  
});


let option2p1 = document.createElement("p");

option2p1.innerHTML = "Initially designed to";

option2.appendChild(option2p1);

option2p1.setAttribute("class", "option__subtitle");

document.querySelectorAll('.option__subtitle').forEach(function(el, i, arr){ 
    el.style.cssText = 'font-family: Arvo; font-style: normal; font-weight: normal; font-size: 50px; line-height: 60px; color: #212121; margin: 20px 95px 0px; text-align: center;'  
});



let option2p2 = document.createElement("p");

option2p2.innerHTML = "But I must explain to you how all this mistaken idea of denouncing ";

option2.appendChild(option2p2);

option2p2.setAttribute("class", "option__text");

document.querySelectorAll('.option__text').forEach(function(el, i, arr){ 
    el.style.cssText = 'font-family: Open Sans; font-style: normal; font-weight: normal; font-size: 20px; line-height: 30px; color: #9FA3A7; margin: 20px 95px 0px; text-align: center;'  
});



let option2a = document.createElement("a");

option2a.innerHTML = "Start here";

option2.appendChild(option2a);

option2a.setAttribute("class", "option__btn");

document.querySelectorAll('.option__btn').forEach(function(el, i, arr){ 
    el.style.cssText = 'border: 3px solid #FFC80A; border-radius: 50px; padding: 20px 30px; font-family: Montserrat; font-style: normal; font-weight: bold; font-size: 20px; line-height: 15px; margin: 60px 0px 80px; letter-spacing: 2.4px;'  
});


// hover 

document.querySelector('.one').addEventListener('mouseover', function(){
    this.style.cssText = 'display:flex; flex-direction: column; width: 50%; border: 1px solid #E8E9ED; align-items: center; border-radius:5px 0px 0px 5px; background: #8F75BE;';

    document.querySelector('h3').classList.toggle('hover-h3');
    document.querySelector('option__subtitle').classList.toggle('hover');
    document.querySelector('option__text').classList.toggle('hover');
    document.querySelector('option__btn').classList.toggle('hover');
    
})

document.querySelector('.one').addEventListener('mouseout', function(){
    this.style.cssText = 'display:flex; flex-direction: column; width: 50%; border: 1px solid #E8E9ED; align-items: center; border-radius:5px 0px 0px 5px; background: #white;';
    document.querySelector('h3').classList.toggle('hover-h3');
    document.querySelector('option__subtitle').classList.toggle('hover');
    document.querySelector('option__text').classList.toggle('hover');
    document.querySelector('option__btn').classList.toggle('hover');
})



document.querySelector('.two').addEventListener('mouseover', function(){
    this.style.cssText = 'display:flex; flex-direction: column; width: 50%; border: 1px solid #E8E9ED; align-items: center; border-radius:5px 0px 0px 5px; background: #8F75BE;';
    document.querySelector('h3').classList.toggle('hover-h3');
    document.querySelector('option__subtitle').classList.toggle('hover');
    document.querySelector('option__text').classList.toggle('hover');
    document.querySelector('option__btn').classList.toggle('hover');
})

document.querySelector('.two').addEventListener('mouseout', function(){
    this.style.cssText = 'display:flex; flex-direction: column; width: 50%; border: 1px solid #E8E9ED; align-items: center; border-radius:5px 0px 0px 5px; background: #white;';
    document.querySelector('h3').classList.toggle('hover-h3');
    document.querySelector('option__subtitle').classList.toggle('hover');
    document.querySelector('option__text').classList.toggle('hover');
    document.querySelector('option__btn').classList.toggle('hover');
});


