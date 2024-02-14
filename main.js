let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;


    let dlBtn=document.createElement("button");
    dlBtn.innerText="X";
    dlBtn.classList.add("bttn")

    item.appendChild(dlBtn);
    ul.appendChild(item);
    inp.value="";

})


// let btns=document.querySelectorAll(".bttn");

// for (dlBtn of btns){
//     dlBtn.addEventListener("click",function(){

//         let parrent=this.parentElement;
//         parrent.remove();

//     });
// }

ul.addEventListener("click",function(event){
    if (event.target.nodeName == "BUTTON"){
        
        let listItem=event.target.parentElement;

        listItem.remove();
    }
})