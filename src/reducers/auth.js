export default (state = null, { type, payload }) => {
  switch (type) {
    case 'LOGIN': 
      return !payload ? state : payload;
    case 'LOGOUT': return null;
    default: return state;
  }
};