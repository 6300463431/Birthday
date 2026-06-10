function checkPassword(){

  const password = document.getElementById("password").value;

  if(password.toLowerCase() === "jessie"){

    window.location.href = "page2.html";

  } else {

    document.getElementById("message").innerHTML =
    "Not yet ✨<br><small>The key is hidden in the way I call you, not the way the world does ❤️</small>";

  }

}

function showSecret(){

  const secret =
  document.getElementById("secret-message");

  secret.style.opacity = "1";

  confetti({
    particleCount:200,
    spread:120,
    origin:{ y:0.6 }
  });

}