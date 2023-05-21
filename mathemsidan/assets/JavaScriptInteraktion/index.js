import {getRecipeApi } from "./fetch";
// calls for the api and later the whole process starts here
function main() {
  tabindex().then(getRecipeApi);
}
main();

function tabindex(){
  const elements = document.querySelectorAll('[tabindex]');

// Add event listeners for focus and blur
elements.forEach(element => {
  element.addEventListener('focus', () => {
    element.classList.add('focus-highlight');
  });

  element.addEventListener('blur', () => {
    element.classList.remove('focus-highlight');
  });
})};