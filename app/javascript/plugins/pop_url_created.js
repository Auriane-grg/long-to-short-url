const popUrlCreated= () => {
  const close = document.querySelector('.fa-times');
  const pop = document.getElementById('pop');
  const url = document.getElementById('pop-short-url').innerText;
  const copy = document.getElementById('copy-btn')

  // Do not execute the validation if you are not in the new form page :
  if (!pop) { return };


close.addEventListener('click', () => {
    pop.style.display = "none";
  });


copy.addEventListener('click', () => {
  navigator.clipboard.writeText(url);
  copy.innerText = "COPIED !"
});
}


export { popUrlCreated }
