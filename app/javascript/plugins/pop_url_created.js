const popUrlCreated= () => {
  const close = document.querySelector('.fa-times')
  const pop = document.getElementById('pop')

  // Do not execute the validation if you are not in the new form page :
  if (!pop) { return };


  close.addEventListener('click', () => {
    pop.style.display = "none";
  });
}

export { popUrlCreated }
