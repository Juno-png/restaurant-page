function createContact() {
  const contact = document.createElement('div')
  contact.classList.add('contact')

  const header = document.createElement('div');
  header.classList.add('header');

  const heading = document.createElement('h1');
  heading.textContent = 'Contact Us';

  header.appendChild(heading);

  
  const contactContainer = document.createElement("div");
  const phone = document.createElement("p");
  phone.textContent =
    "Phone: (123) 456-7890";

  const email = document.createElement("p");
  email.textContent =
    "Email: customerservice@sapporosushi.com";

  const address = document.createElement("p");
  address.textContent =
    "Address: 1234 Main St, Suite 69, Somewhere USA 12345";

  contactContainer.appendChild(phone);
  contactContainer.appendChild(email);
  contactContainer.appendChild(address);

  contact.appendChild(header);
  contact.appendChild(contactContainer);

  
  return contact;
}

function loadContact() {
  const content = document.querySelector('#content');
  content.innerHTML = '';
  content.appendChild(createContact());
}

export default loadContact;