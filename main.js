$(document).ready(function () {


// Icon set
const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];

  const colors = [
    'blue',
    'orange',
    'purple'
  ]

  // riferimento di elemento nel dom
  const container = $('.icons');

  // print ICONS
  // printIcons(icons, container);

  // print con colori
  const coloredIcons = colorIcons(icons, colors);
  console.log(coloredIcons);
  printIcons(coloredIcons, container);
}); //end doc



// function
// stampare le icone nel contaier
function printIcons(icons, container) {

  icons.forEach((icon) => {
    // destrutturazione di icon
    const {family, prefix, name, color} = icon;

    const html =
    `<div class="icon">
       <i class="${family} ${prefix}${name}"
       style="color: ${color}"></i>
       <div class="title">${name}</div>
    </div>`;

    container.append(html);
  });
}

// colorare le icone
function colorIcons (icons, colors) {
  // ottenere i type
  const types = getType(icons);
  console.log(types);

  // assegnare il colore
  // creare una array senza toccare l'originale, iterare sulle icone
  const coloredIcons = icons.map((icon) => {
    // sfrutto gli indici degli elementi, con indexoff per ottenere gli indici in base al valore
    const indexType = types.indexOf(icon.type);

    // itero e faccio una copia esatta
    return {
      ...icon,
      color: colors[indexType]
    }
  });

  return coloredIcons;
}

// ottenere le icone in base al tipo
function getType(icons) {
  const types = [];

  // iterare sulle icone
  icons.forEach((icon) => {
    // se non è già presente lo inserisco
    if(! types.includes(icon.type)) {
      types.push(icon.type);
    }
  });

  // viene ritornata fuori ed assegnata alla variabile
  return types;
}
