//get the form by its id
const form = document.getElementById("contact-form"); 

//1.
const formEvent = form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    //2.
    let mail = new FormData(form);
  
    //3.
    sendMail(mail);
  })

  const sendMail = (mail) => {
    //1.
    fetch("/send", {
      method: 'POST',
      body: mail
  
    }).then((response) => {
      console.log(response.json);
      return response.json();

    });
  };