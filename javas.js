const item = document.querySelector("#item");
const todobox = document.querySelector("#to-do-box")
const newli = document.createElement("li");

item.addEventListener("keyup",
  function(event){
if(event.key=="Enter"){
    add(this.value);
    this.value=""
}
  }
)

const add = (item)=>{

newli.innerHTML=`
        ${item}
    <i class="fa-solid fa-trash"></i>
`;

todobox.appendChild(newli);

newli.addEventListener("click",function(){

    this.classList.toggle("done");
});

newli.querySelector("i").addEventListener("click",function(){

newli.remove()

})
}