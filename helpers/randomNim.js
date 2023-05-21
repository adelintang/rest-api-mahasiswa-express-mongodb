/* eslint-disable no-plusplus */
const randomNim = () => {
  const number = '1234567890';
  let result = '';

  for (let i = 0; i < 6; i++) {
    result += number[[Math.floor(Math.random() * number.length)]];
  }

  return Number(result);
};

export { randomNim };
