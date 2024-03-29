const form = document.getElementById("form");
const error = document.getElementById("error");
const myInput = document.getElementById("myInput");

const passValid = (pasValue) => {
    const pattern = /^[a-zA-Z0-9]{4,}$/;
    const result = pattern.test(pasValue);
    if (!result) {
        error.textContent = "Qatorni bo'sh qoldirish yoki 4 tadan kam belgi yozish taqiqlanadi!";
        error.myInput.style.borderColor = "red"
    } else {
        error.textContent = "";
        return result;
    }
};


const handleSubmit = ( e ) => {
    e.preventDefault( );
    const emailVal = e.target[0].value;
    const passVal = passValid(e.target[1].value.trim());

    if ( emailVal.trim().length !== 0 && passVal) {
        window.location.href = "home.html";
    }
};

form.addEventListener("submit" , handleSubmit);