export default (state = '/landing', { type, payload }) => {
  switch (type) {
    case 'LANDING': return '/landing';
    case 'SIGNUP': return '/signup';
    case 'LOGIN': return '/login';
    case 'SEARCH_RESULTS': return '/search-results';
    case 'PROFILE': return '/profile';
    default: return state;
  }
};