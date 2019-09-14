/* eslint-disable linebreak-style */
const validation = {
  'email': {
    presence: true,
    email: true,
  },
  'password': {
    presence: true,
    length: {
      minimum: 5,
    },
  },
  'confirm-password': {
    presence: true,
    equality: 'password',
  },
  'username': {
    presence: true,
    length: {
      minimum: 3,
      maximum: 20,
    },
  },
};

export default validation;
