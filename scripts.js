const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if(email == 'nivetha@gmail.com'){
        alert("send your message successful!")
    }
    else{
        alert("please enter valid mail ");
    } 
    console.log('Name': ${name}, Email: ${email}, Message: ${message});
});