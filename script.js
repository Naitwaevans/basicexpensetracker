const form = document.getElementById("form");
const inputText = document.getElementById("inpText");






form.addEventListener("submit",  (e)=>{
    e.preventDefault()
    if (inputText.value === "") {
        console.log('failure');
    } else {
        console.log('Success');
    }

});
