import uuid from 'uuid';

export default {
  users: [
    {
      id: uuid.v4(),
      name: 'Pepe Pérez',
      photo: '/img/boy1.jpg'
    },
    {
      id: uuid.v4(),
      name: 'María Rodriguez',
      photo: '/img/girl1.jpg'
    },
    {
      id: uuid.v4(),
      name: 'Juan Gonzales',
      photo: '/img/boy2.jpg'
    },
    {
      id: uuid.v4(),
      name: 'Natalia Contreras',
      photo: '/img/girl2.jpg'
    }
  ]
};
