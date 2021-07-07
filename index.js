const randomPassword = () => {
  let charCollection =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  let passLength = 16;
  let randomPass = "";
  for (let index = 0; index < passLength; index++) {
    const charNo = Math.floor(Math.random() * charCollection.length);
    randomPass += charCollection.substring(charNo, charNo + 1);
  }
  const passInput = document.querySelector(".pass-input");
  passInput.value = randomPass;
};

const passBtn = document.getElementById("pass-btn");
passBtn.addEventListener("click", () => {
  randomPassword();
});

const copyPass = () => {
  let copiedPass = document.querySelector(".pass-input");
  let copiedPassword = copiedPass.value;
  copiedPass.select();
  copiedPass.setSelectionRange(0, copiedPassword.length);
  document.execCommand("copy");
};

const copySymbol = document.querySelector(".fa");
copySymbol.addEventListener("click", () => {
  copyPass();
  alert("Random Password has been Copied.");
});
