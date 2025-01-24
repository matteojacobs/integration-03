const $form = document.querySelector("#cipherForm");
const $interaction__message = document.querySelector("#interaction__message");
const $secretMessage = document.querySelector("#secretMessage");
const $interaction__title = document.querySelector("#interaction__title");
const $downloadSection = document.querySelector("#downloadSection");
const $downloadPdf = document.querySelector("#downloadPdf");
const $doItAgain = document.querySelector("#doItAgain");


// Modified Caesar Cipher function
const caesarCipher = (text, decrypt = false) => {
  const shift = decrypt ? -3 : 3; // Dynamic shift based on operation
  return text.replace(/[a-zA-Z]/g, function (c) {
    const base = c < "a" ? 65 : 97;
    return String.fromCharCode(
      ((c.charCodeAt(0) - base + shift + 26) % 26) + base
    );
  });
};

// Keep the rest of the code the same

const encryptText = () => {
  const text = $secretMessage.value;
  const result = caesarCipher(text, false);
  $interaction__message.textContent = result;
};

const decryptText = () => {
  const text = $secretMessage.value;
  const result = caesarCipher(text, true);
  $interaction__message.textContent = result;
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const pseudonym = document.getElementById("pseudonym").value;
  const action = event.submitter.value;

  if (action === "encrypt") {
    encryptText();
  } else if (action === "decipher") {
    decryptText();
  }

  $interaction__title.textContent = pseudonym;
  $interaction__title.classList.remove("hidden");
  $interaction__message.classList.remove("hidden");
  $form.classList.add("hidden");
  $downloadSection.classList.remove("hidden");
};

const downloadPdf = () => {
  const message = $interaction__message.textContent;
  const pseudonym = $interaction__title.textContent;
  const doc = new jsPDF();
  doc.text(`Pseudonym: ${pseudonym}\n\nMessage: ${message}`, 10, 10);
  doc.save("secret_message.pdf");
};

const doItAgain = () => {
  $form.reset();
  $form.classList.remove("hidden");
  $downloadSection.classList.add("hidden");
  $interaction__title.classList.add("hidden");
  $interaction__message.classList.add("hidden");
};

$form.addEventListener("submit", handleFormSubmit);
$downloadPdf.addEventListener("click", downloadPdf);
$doItAgain.addEventListener("click", doItAgain);
