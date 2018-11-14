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

export const renderIf = (test, component) => {
  return test ? component : null;
};

/***********************************
*     AWS Upload Util     *
************************************/

export const photoToDataUrl = file => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.addEventListener('load', () => {
      resolve(reader.result);
    });

    reader.addEventListener('error', () => {
      reject(reader.error);
    });

    return file ? reader.readAsDataURL(file) : reject(new Error('USEAGE ERROR: Must provide a file'));
  });
};