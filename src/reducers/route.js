export default (state = '/', { type, payload }) => {
  switch (type) {
    case 'LANDING': return '/';
    case 'LOGOUT': return '/';
    case 'SEARCH_RESULTS': return '/search-results';
    case 'PROFILE': return '/profile';
    case 'ABOUT': return '/about';
    case 'SWITCH_ROUTE':
      return payload;

    default: return state;
  }
};