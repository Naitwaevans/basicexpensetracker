const form = document.getElementById("form");
const inputText = document.getElementById("inpText");
const msg = document.getElementById("msg")






form.addEventListener("submit",  (e)=>{
    e.preventDefault()
    if (inputText.value === "") {
        console.log('failure');
        msg.innerHTML = "Item cannot be blank!"
    } else {
        console.log('Success');
    }

});
