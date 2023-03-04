function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        createApps(
            'Baked Mussels',
            'Made with five large mussels per serving, each mussel is lightly seasoned and baked to perfection with a creamy garlic butter sauce.'
        )
    );
    menu.appendChild(
        createApps(
            'Broiled Yellowtail',
            'succulent yellowtail fish that is lightly seasoned and then broiled to perfection, giving it an amazing smoky flavor.'
        )
    );
    menu.appendChild(
        createSushiSash(
            'Salmon',
            'Prepared 2pc Sushi OR 7pc Sashimi - The fish has a delicate, buttery texture and a mild, slightly sweet flavor'
        )
    );
    menu.appendChild(
        createSushiSash(
            'Yellowtail',
            'Prepared 2pc Sushi OR 7pc Sashimi - The fish has a light and buttery texture with a delicate flavor'
        )
    );
    menu.appendChild(
        createRolls(
            'Tuna Tataki',
            'In: Spicy Imitation Crab Meat, Shrimp Tempura, Cucumber, Avocado, Cilantro, Red Onion / Out: Tuna, Black Pepper, Sesame Oil & Seared Rayu & Spicy Mayo Sauce.'
        )
    );
    menu.appendChild(
        createRolls(
            'Sunset',
            'In: Spicy Imitation Crab Meat, Shrimp Tempura, Avocado, Cucumber / Out: Salmon, White Tuna, Spicy Sesame Oil and Seared.'
        )
    );

    return menu;
}

function createApps(name, description) {
    const apps = document.createElement('div');
    apps.classList.add('appetizers');

    const appName = document.createElement('h2');
    appName.textContent = name;

    const appDescription = document.createElement('p');
    appDescription.textContent = description;

    const appImage = document.createElement('img');
    appImage.src = `images/appetizers/${name.toLowerCase()}.png`;
    appImage.alt = `${name}`;

    apps.appendChild(appImage);
    apps.appendChild(appName);
    apps.appendChild(appDescription);

    return apps;
}

function createSushiSash(name, description) {
    const sushiSash = document.createElement('div');
    sushiSash.classList.add('sushi-sash');

    const ssName = document.createElement('h2');
    ssName.textContent = name;

    const ssDescription = document.createElement('p');
    ssDescription.textContent = description;

    const ssImage = document.createElement('img');
    ssImage.src = `images/sushiSash/${name.toLowerCase()}.png`;
    ssImage.alt = `${name}`;

    sushiSash.appendChild(ssImage);
    sushiSash.appendChild(ssName);
    sushiSash.appendChild(ssDescription);

    return sushiSash;
}

function createRolls(name, description) {
    const rolls = document.createElement('div');
    rolls.classList.add('rolls');

    const rollName = document.createElement('h2');
    rollName.textContent = name;

    const rollDescription = document.createElement('p');
    rollDescription.textContent = description;

    const rollImage = document.createElement('img');
    rollImage.src = `images/rolls/${name.toLowerCase()}.png`;
    rollImage.alt = `${name}`;

    rolls.appendChild(rollImage);
    rolls.appendChild(rollName);
    rolls.appendChild(rollDescription);

    return rolls;
}

function loadMenu() {
    const content = document.querySelector('#content');
    content.textContent = '';
    content.appendChild(createMenu());
}

export default loadMenu;