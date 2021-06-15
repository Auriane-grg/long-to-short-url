const errorsNewForm= () => {
  const submit = document.getElementById('submit-btn')
  const longURL = document.getElementById('input-long-url')
  const shortURL = document.getElementById('input-short-url')

  // Do not execute the validation if you are not in the new form page :
  if (!submit) { return };



  // Error messages if submit and blank field for long url
  submit.addEventListener('click', () => {
    if (longURL.value === "") {
      // console.log('empty')
      longURL.nextElementSibling.innerText = "This field is mandatory: please fill it."
    }
  });


  // Dynamic error messages when changing fields
  longURL.addEventListener('change', () => {
    if (longURL.value != "") {
      if (/^(http|ftp|https)://([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(longURL.value) === false) {
        longURL.nextElementSibling.innerHTML = "<i class='fas fa-exclamation-triangle'></i> Your long URL should match this format : wwww.azerty.com/zerty<i class='fas fa-exclamation-triangle'></i>"
      } else {
        longURL.nextElementSibling.innerHTML = ""
      };
    };
  });

  shortURL.addEventListener('change', () => {
    if (shortURL.value != "") {
      if (/^[a-zA-Z0-9.\-#=]+[a-z]+[a-zA-Z0-9.\-#=]*$/.test(shortURL.value) === false) {
        shortURL.parentElement.nextElementSibling.innerHTML = "<i class='fas fa-exclamation-triangle'></i> Your short URL should match this format : wwww.azerty.com/zerty. Only use letters, digits, -, #, or = <i class='fas fa-exclamation-triangle'></i>" 
      } else {
        shortURL.parentElement.nextElementSibling.innerHTML = ""
      };
    };
  });

}

export { errorsNewForm }
