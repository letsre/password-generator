const btnGen = document.querySelector("button");
const password = document.querySelector("input");
const copy = document.querySelector(".input-icon");

btnGen.addEventListener("click", () => {
  password.value = randomString();
});

copy.addEventListener("click",()=>{
 password.select();
 document.execCommand("copy");
 password.setSelectionRange(0, 0);
});

function randomString() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let result = "";
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result+=characters[randomIndex];
  }
  return result;
}
