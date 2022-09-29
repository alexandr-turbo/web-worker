let a = 0;
let b = 1;
let c = a + b

const getFibonacciNumber = async () => {
  a = b;
  b = c;
  c = a + b;
  await postMessage(c);
  await getFibonacciNumber();
  // setTimeout(async () => await getFibonacciNumber(), 0);
};

onmessage = async () => {
  await getFibonacciNumber();
};
