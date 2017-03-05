import uuid from 'uuid';

// Datos iniciales
const initial = [
  {
    id: uuid.v4(),
    name: 'Spotlight',
    description: 'Spotlight (conocida en Hispanoamérica como En primera plana) es una película dramática estadounidense de 2015, ganadora del Oscar a la mejor película, dirigida por Thomas McCarthy y escrita por McCarthy y Josh Singer.',
    photo: 'http://www.newyorker.com/wp-content/uploads/2015/11/Larson-Spotlight-1200.jpg',
  },
  {
    id: uuid.v4(),
    name: 'Rambo',
    description: 'Rambo es una popular saga de películas de acción protagonizadas por Sylvester Stallone.',
    photo: 'http://film.thedigitalfix.com/protectedimage.php?image=JohnWhite/ramb4_av.jpg_16062008',
  },
  {
    id: uuid.v4(),
    name: 'La La Land',
    description: 'La La Land es una película romántica y musical estadounidense de 2016, escrita y dirigida por Damien Chazelle.',
    photo: 'https://i.ytimg.com/vi/0pdqf4P9MB8/maxresdefault.jpg',
  },
  {
    id: uuid.v4(),
    name: 'Captain Fantastic',
    description: 'Captain Fantastic es una película estadounidense de 2016 del género comedia dramática escrita y dirigida por Matt Ross y protagonizada por Viggo Mortensen.',
    photo: 'https://www.flickeringmyth.com/wp-content/uploads/2016/06/Captain-Fantastic-poster-1.jpg',
  }
];

const reducer = function (state = initial, action) {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
