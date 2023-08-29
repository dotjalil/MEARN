(function typing() {
  var msg =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ";
  var msgTyping = "";
  var p = document.getElementById("msg");
  var i = 0;
  var typingInterval = setInterval(() => {
    msgTyping += msg[i];
    p.innerText = msgTyping;
    i++;
    if (i >= msg.length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        window.close();
      }, 500);
    }
  }, 100);
})();
