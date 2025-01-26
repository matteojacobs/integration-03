const $form = document.querySelector(".cipherForm");
const $interaction__message = document.querySelector(".inter3__message");
const $secretMessage = document.querySelector("#secretMessage");
const $interaction__title = document.querySelector(".inter3__pseudonym");
const $downloadSection = document.querySelector(".inter3__final--buttons");
const $doItAgain = document.querySelector("#doItAgain");
const $inter3__final = document.querySelector(".inter3__final");
const $pseudonym = document.querySelector("#pseudonym");

const caesarCipher = (text, decrypt = false) => {
  const shift = decrypt ? -3 : 3;
  return text.replace(/[a-zA-Z]/g, function (c) {
    const base = c < "a" ? 65 : 97;
    return String.fromCharCode(
      ((c.charCodeAt(0) - base + shift + 26) % 26) + base
    );
  });
};

const encryptText = (text) => caesarCipher(text, false);
const decryptText = (text) => caesarCipher(text, true);

const handleFormSubmit = (event) => {
  event.preventDefault();

  if (!$pseudonym.value || !$secretMessage.value) {
    alert("Please fill in both fields");
    return;
  }

  const action = event.submitter.value;
  const message = $secretMessage.value;
  let result;

  if (action === "Encrypt") {
    result = encryptText(message);
    console.log(result);
  } else if (action === "Decipher") {
    result = decryptText(message);
    console.log(result);
  }

  $interaction__title.textContent = $pseudonym.value;
  $interaction__message.textContent = result;

  $form.classList.add("hidden");
  $inter3__final.classList.remove("hidden");
};



const doItAgain = () => {
  $form.reset();
  $form.classList.remove("hidden");
  $downloadSection.classList.add("hidden");
  $interaction__title.textContent = "";
  $interaction__message.textContent = "";
};

$form.addEventListener("submit", handleFormSubmit);
$doItAgain.addEventListener("click", doItAgain);
