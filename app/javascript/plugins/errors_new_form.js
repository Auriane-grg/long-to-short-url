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
  longURL.addEventListener('focus', () => {
    if (longURL.value === "") {
      longURL.nextElementSibling.innerText = "This field is mandatory: please fill it."
    }
  });

  longURL.addEventListener('change', () => {
    if (longURL.value != "") {
      if (/^https?:\/\/(www\.)?[a-zA-Z0-9@:%_\-\+~#=]+\.[a-zA-Z0-9]{1,6}(\/([a-zA-Z0-9()@:%_\+\-.~#?&\/\/=]*))*/.test(longURL.value) === false) {
        longURL.nextElementSibling.innerText = "Your long URL should match this format : wwww.azerty.com/zerty."
      } else {
        longURL.nextElementSibling.innerText = ""
      };
    };
  });

  shortURL.addEventListener('change', () => {
    if (shortURL.value != "") {
      if (/^[a-zA-Z0-9.\-#=]+[a-z]+[a-zA-Z0-9.\-#=]*$/.test(shortURL.value) === false) {
        shortURL.parentElement.nextElementSibling.innerText = "Your short URL should match this format : wwww.azerty.com/zerty. Only use letters, digits, -, #, or =."
      } else {
        shortURL.parentElement.nextElementSibling.innerText = ""
      };
    };
  });

}

export { errorsNewForm }
