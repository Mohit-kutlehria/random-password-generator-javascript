const passwordBox = document.getElementById('password');
const passwordLength = 16;


const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~!|/{}[]<>-=";

const all = upper + lower + numbers + symbols;


function createPassword() {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * all.length);
    password += all[randomIndex];
  }

  passwordBox.value = password;
}

function copyPassword() {
  if (passwordBox.value === "") {
    alert("Generate a password first!");
    return;
  }
  navigator.clipboard.writeText(passwordBox.value)
  .then(() => {
      const toast = document.createElement("div");
      toast.textContent = "Copied!";
      toast.style.cssText = `
        position: fixed; top: 20px; right: 20px;
        background: #4caf50; color: white; padding: 10px 15px; z-index:999;
        border-radius: 5px; opacity: 0.9;
        transition: opacity 0.5s ease-out;
      `;
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => document.body.removeChild(toast), 500);
      }, 1000);
    })
  .catch(err => alert("Failed to copy password:" + err));
}