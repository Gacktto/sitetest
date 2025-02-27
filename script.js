const btnsChat = document.querySelectorAll(".btns-chat");

setInterval(() => {
    btnsChat.forEach(btn => {
        btn.style.display = 'flex';
        btn.href = 'https://chat.vipajudabrasil.uk/lp4';
    })
}, 160000)