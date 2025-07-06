let prompt=document.querySelector("#prompt")

function createChatBox(html,classes){
    let div=document.createElement("div")
    div.innerHTML=html
    div,classList.add(classes)
    return div
}


function handlechatResponse(message){
    let html=`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&s" alt="" id="userImage" width="62 px">
<div class="user-chat-area">
${message}
</div>`
let userChatbox=createChatBox(html,"user-chat-box")
}


prompt.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        handlechatResponse(prompt.value)

    }
    
    
})