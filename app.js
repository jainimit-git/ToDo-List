let app = document.querySelector(".app");
let head = document.querySelector(".head");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");
let input = document.querySelector(".input");

btn.addEventListener("click" , ()=>{
    if(input.value === ""){
        alert("Enter the task");
    }else{
        let ans = input.value;
        let l1 = document.createElement('li');
        l1.innerText = ans;
        list.append(l1);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        l1.appendChild(span);
    }
    input.value = "";
})

list.addEventListener("click" , (e)=>{
if(e.target.tagName == "LI"){
    e.target.classList.toggle("checked");
}else if(e.target.tagName == "SPAN"){
    e.target.parentElement.remove();
}
} , false);
