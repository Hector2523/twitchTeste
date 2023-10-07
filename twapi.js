var channelName = undefined;
var chatSelect = document.getElementById("chat");
function embedTwitchChannel() {
  channelName = document.getElementById("escolhaCanal").value;
  document.getElementById("twitch-embed").innerHTML = "";
  
  new Twitch.Player("twitch-embed", {
      channel: channelName
  });

  document.getElementById("twitch-embed").style.animation = "box 2s forwards";
}

function abrirChat() {

  const iframe = document.getElementById("twitch-chat-embed");
  if ( channelName == undefined ){
    alert("Selecione o canal primeiro");
    return false;
  }
  
  console.log("abrirChat(): iFrame  display=["+ getComputedStyle(iframe).display +"]");
  const doaminName = document.location.host;
  switch (chatSelect.value) {
      case "0": 
      document.getElementById("twitch-embed").style.animation = "box 1.5s forwards";
      break;
      case "1":
          iframe.style.display = "block";
          iframe.setAttribute("src", "https://www.twitch.tv/embed/"+channelName+"/chat?parent=" + domainName);
          document.getElementById("twitch-embed").style.animation = "boxNone 1.5s forwards";
          break;
      case "2":
          iframe.style.display = "none";
          document.getElementById("twitch-embed").style.animation = "box 1.5s forwards";
          break;
      default:
          alert("Opção inválida");
  }
  console.log("abrirChat(): iFrame NEW display=["+ getComputedStyle(iframe).display +"]");
}