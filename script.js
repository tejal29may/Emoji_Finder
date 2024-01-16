
let input=document.getElementById("search_fields");
let emoji=document.getElementById("emoji");
// let search=document.getElementById("search")


function displayresult(search_value=""){
    let filtered_list=emojiList.filter((e)=>{
        let ans=search_value.toLowerCase();
        if(e.description.indexOf(ans) != -1){
            return true;
        }
        if(e.tags.some((elem) => elem.startsWith(ans))){
            return true;
        }

        if(e.aliases.some((elem) => elem.startsWith(ans))){
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
// if(is.toUpperCase(e.aliases) ||  )
emoji.appendChild(div);
});


}
// console.log(emojiList);




window.onload=()=>displayresult();
input.addEventListener("keyup",()=>{
    let search_value=input.value;
    // search_value.toLowerCase();
    displayresult(search_value);
});