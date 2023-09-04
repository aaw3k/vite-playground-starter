import { setupCounter } from './counter'

const counterButton = document.querySelector<HTMLButtonElement>('#counter')
// If the counter button element exists, set up the counter
if (counterButton !== null) {
  setupCounter(counterButton)
}
