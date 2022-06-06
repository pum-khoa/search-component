export const debounce = (FUNCTION, DURATION) => {
  let timer;
  return (param) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      FUNCTION(param);
    }, DURATION);
  };
};
