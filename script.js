const btnsChat = document.querySelectorAll(".btns-chat");

setInterval(() => {
    btnsChat.forEach(btn => {
        btn.style.display = 'flex';
    })
}, 160000)