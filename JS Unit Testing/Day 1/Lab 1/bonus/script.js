console.log("Hi from the browser");

const capitalizeText = (input) => {
  if (typeof input !== "string") {
    throw new TypeError("parameter should be string");
  }
  return input.toUpperCase();
};

const createArray = (number) => {
  const myArray = Array.from(Array(number).keys());
  return myArray;
};

const printFn = () => {
  console.log("Hi");
};

// export { capitalizeText, createArray };
