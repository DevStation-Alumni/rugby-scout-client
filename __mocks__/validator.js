const validator = jest.genMockFromModule('validator');

const isEmail = (email) => {
  if (isEmail === 'bad'){
    return false;
  }
};

const isAlphanumeric = (email) => {
  if (isEmail === 'bad'){
    return false;
  }
};

validator.isEmail = isEmail;
validator.isAlphanumeric = isAlphanumeric;

export default validator;