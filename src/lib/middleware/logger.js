const logger = store => next => action => {
  console.log('__Action__', action);

  try {
    const result = next(action);
    console.log('__State__', store.getState());

    return result;

  } catch (error) {
    error.action = action;
    console.error('__ERROR__', error);

    return error;
  }

}

export default logger;
