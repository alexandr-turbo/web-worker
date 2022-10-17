let a = 1;

const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false; 
  return num > 1;
}

const getprimeNumber = async () => {
  if (isPrime(a)) {
    await postMessage(a);
  };
  a++;
  await getprimeNumber();
};

onmessage = async () => {
  await getprimeNumber();
};
