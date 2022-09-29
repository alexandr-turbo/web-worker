import { initFibonacciDedicatedWorker } from "./init-fibonacci-dedicated-worker";

import { restart, result } from "./elements";

let dedicatedWorker;

function startCalculating() {
  dedicatedWorker = initFibonacciDedicatedWorker(
    (data) => {
      result.innerHTML = data;
    }
  )
  dedicatedWorker.postMessage(0);
}

window.onload = function() {
  startCalculating();
};

restart.addEventListener("click", () => {
  dedicatedWorker.terminate();
  dedicatedWorker = undefined;
  // startCalculating();
  setTimeout(() => startCalculating(), 5000)
});
