export const tokenDelete = () => {
  localStorage.removeItem('token');
};

export const cookieDelete = key => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};

export const cookieFetch = key => {
  let cookies = Object.assign(...document.cookie.split(';')
    .map(cookie => {
      let [key, value] = cookie.split('=');
      return { [key.trim()]: value };
    }));
  return cookies[key];
};