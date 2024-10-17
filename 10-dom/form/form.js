const formEl = document.querySelector('form');
console.log(formEl);

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
    const email = event.target.email.value;
    const password = event.target.password.value;
    const check = event.target.check.checked;
    console.log(email, password, check);
    const data = [...new FormData(formEl)];
    const dataObject = Object.fromEntries(data);
    if (validateUserInfo(dataObject) && validateUserPassword(dataObject)) {
        showUserInfo(dataObject);
    } else {
        showErrorAlert();
        return;
    }
    console.log(dataObject);
})


const showUserInfo = function (dataObject) {
    const alert = `
    <div class="alert alert-primary" mt-2 role="alert">
     <p> Este es el email de usuario: ${dataObject.email} </p>
     <p> Este es el password de usuario: ${dataObject.password} </p>
    </div>`
    ;
    formEl.insertAdjacentHTML('beforeend', alert)
}

function showErrorAlert() {     
    const alert = `
    <div class="alert alert-danger" mt-2 role="alert">
     <p> Algo salio mal </p>
    </div>`
    ;
    formEl.insertAdjacentHTML('beforeend', alert)
}

function validateUserInfo (infoObject) {
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const isValidEmail = regexEmail.test(infoObject.email);
    return isValidEmail;
}

function validateUserPassword (infoObject) {
    const regexPassword = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:<>?[\]\/.,])(?!.*\s).{10,10}$/;
    const isValidPassword = regexPassword.test(infoObject.password);
    return isValidPassword;
}