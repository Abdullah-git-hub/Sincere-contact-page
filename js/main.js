formInput = document.getElementsByClassName("formInput");

for (let i = 0; i < formInput.length; i++) {
    let ele = formInput[i];
    ele.addEventListener("focus", ()=>{
        ele.previousElementSibling.style.color = "#a72633";
    })

    ele.addEventListener("blur", ()=>{
        ele.previousElementSibling.style.color = "#6f6e6e";
    })
}