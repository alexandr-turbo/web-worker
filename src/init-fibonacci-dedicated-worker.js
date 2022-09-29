const initFibonacciDedicatedWorker = (onSuccess) => {
  const worker = new Worker("./workers/get-nth-fibonacci-number.worker.js", {
    type: "module",
  });
  worker.onmessage = (event) => {
    onSuccess(event.data);
  };
  return worker;
};

export { initFibonacciDedicatedWorker };