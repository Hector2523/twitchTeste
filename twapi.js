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

var Vframe = document.querySelector('.iframe iframe');

function abrirChat() {

  const iframe = document.getElementById("twitch-chat-embed");
  if ( channelName == undefined ){
    alert("Selecione o canal primeiro");
    return false;
  } else{}

  console.log("abrirChat(): iFrame  display=["+ getComputedStyle(iframe).display +"]");
  const domainName = document.location.host.split(":")[0];
  switch (chatSelect.value) {
      case "0": 
      document.getElementById("twitch-embed").style.animation = "box 1.5s forwards";
      break;
      case "1":
          iframe.style.display = "block";
          iframe.setAttribute("src", "https://www.twitch.tv/embed/"+channelName+"/chat?parent=" + domainName);
          document.getElementById("twitch-embed").style.animation = "boxNone 1.5s forwards";
          document.getElementById("twitch-embed").style.animation = "boxNone 1.5s forwards";
          document.getElementById("chatField").style.display = "grid";
          document.querySelector('.iframe iframe').style.animation = "boxNone 1.5s forwards";
          document.querySelector('.iframe iframe').style.maxWidth = "70vw";
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