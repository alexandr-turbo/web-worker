import { initprimeDedicatedWorker } from "./init-prime-dedicated-worker";

import { restart, result } from "./elements";

let dedicatedWorker;

function startCalculating() {
  dedicatedWorker = initprimeDedicatedWorker(
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
  startCalculating();
});
