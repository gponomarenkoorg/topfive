export const numberWithComma = (x) => {
  if (x % 1000 === 0) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return x;
};

export const numberDotDecimal = (number) => {
  if (number % 1 === 0) {
    return number.toString().concat('.0');
  }

  return number.toFixed(1).toString();
};
