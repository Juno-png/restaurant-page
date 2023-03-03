import _ from 'lodash';
import sushiImg from './sushi.png';
import loadContact from './contact.js';


// function to create a navbar module
function createNav() {
  const nav = document.createElement('nav');

  const contactButton = document.createElement("button");
  contactButton.classList.add("button-nav");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactButton);
    loadContact();
  });

  nav.appendChild(contactButton);

  return nav;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

// function to create a div with the class header and attach the h1 text to the div for home page
function Header() {
    const header = document.createElement('div');
    header.classList.add('header');

    const heading = document.createElement('h1');
    heading.textContent = 'Sapporo Sushi';

    header.appendChild(heading);

    return header;
}

// function to create a div containing an image for home page
function Image() {
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    img.src = sushiImg;
    img.alt = 'sushi';
    imgContainer.appendChild(img);

    return imgContainer;
}

// function to create a div containg a <p> with copy for home page
function Copy() {
  const copyContainer = document.createElement("div");
  const copy = document.createElement("p");
  copy.textContent =
    "Sapporo Sushi is a contemporary restaurant that specializes in serving authentic Japanese cuisine. Located in the heart of the city, the restaurant offers a sophisticated and stylish dining experience that's perfect for any occasion. From sushi rolls to sashimi, the menu at Sapporo Sushi features a variety of fresh and delicious dishes that are prepared with the finest ingredients. Whether you're looking for a romantic dinner for two or a group gathering with friends, Sapporo Sushi is the perfect destination to satisfy your cravings for delectable Japanese food. Come and experience the flavors of Japan at Sapporo Sushi!";

  copyContainer.appendChild(copy);

  return copyContainer;
}

// content selects div id='content' and then calls the 3 above functions
// to have the generated and appends them to the content div for home page
const content = document.querySelector('#content');
const navElement = createNav();
const headerElement = Header();
const imgElement = Image();
const copyElement = Copy();

// append the navbar, header, image, and copy to the content div
content.appendChild(navElement);
content.appendChild(headerElement);
content.appendChild(imgElement);
content.appendChild(copyElement);

