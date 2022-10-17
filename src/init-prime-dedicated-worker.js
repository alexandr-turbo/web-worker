const initprimeDedicatedWorker = (onSuccess) => {
  const worker = new Worker("./workers/get-prime-number.worker.js", {
    type: "module",
  });
  worker.onmessage = (event) => {
    onSuccess(event.data);
  };
  return worker;
};

export { initprimeDedicatedWorker };
