
let toastbox=document.getElementById("toastbox");
let sm="Successfully submitted";
let em="please fix the error";
let im="invalid input, please check";
function showtoast(massage){
    let toast=document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML=massage;
    toastbox.appendChild(toast);
}