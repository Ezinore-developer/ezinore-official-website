import { writable } from "svelte/store";

export const calcOutput = writable({ val: 0 });

export function displayOutput(o: object) {
  const modal = document.querySelector("#calc-modal");
  if (modal) modal.scrollIntoView({ behavior: "smooth" });
  calcOutput.set({ val: 1, ...o });
}

export function crossOffOutput() {
  calcOutput.set({ val: 0 });
}
