let messageArray = [
  "Serving Virginia's Gun Shops, Gunsmiths, Instructors, Ranges & More",
  "A Preferred Insurance Provider to the Virginia Firearms Community",
  "Serving Virginia's Gun Shops, Gunsmiths, Instructors, Ranges & More",
  "A Preferred Insurance Provider to the Virginia Firearms Community",
];
let messageIndex = 0;

function changeMessage() {
  // now grab the message and change it.
  let newMessage = messageArray[messageIndex];
  let messageElement = document.getElementById("mainMessage");
  messageElement.textContent = newMessage;
  messageIndex++;
  if (messageIndex >= messageArray.length) {
    messageIndex = 0;
  }
}

window.onload = () => setInterval(changeMessage, 4000);
