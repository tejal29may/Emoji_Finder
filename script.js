
let input=document.getElementById("search_fields");
let emoji=document.getElementById("emoji");
// let search=document.getElementById("search")


function displayresult(search_value=""){
    let filtered_list=emojiList.filter((e)=>{
        if(e.description.indexOf(search_value) != -1){
            return true;
        }
        if(e.tags.some((elem) => elem.startsWith(search_value))){
            return true;
        }

        if(e.aliases.some((elem) => elem.startsWith(search_value))){
            return true;
        }
    })






// let parent=document.getElementById("emoji");
emoji.innerHTML="";
filtered_list.forEach((e)=>{
let div=document.createElement("div");
div.classList.add("emoji-card");
div.innerHTML=`
<p class="emoji">${e.emoji}</p>
<p class="alises">${e.aliases[0]}</p>


`
emoji.appendChild(div);
});


}
// console.log(emojiList);




window.onload=()=>displayresult();
input.addEventListener("keyup",()=>{
    let search_value=input.value;
    displayresult(search_value);
});