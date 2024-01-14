const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatBox = document.querySelector(".chatbox");

let userMessage;
const API_KEY = 
const createChatLi = (message, className) => {
  //create chat <li> element with passed message and className
const chatLi = document.createElement("li");
chatLi.classList.add("chat", className);
let chatContent = className === "outgoing"? `<p>${message}</p>`: `<span id="send-btn" class="material-symbols-outlined"></span><p>${message}</p> `;
chatLi.innerHTML = chatContent; 
return chatLi;   
}

const generateResponse = () => {
  const API_URL = "https://api.openai.com/v1/chat/completions";

  const requestOptions ={
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
    
    "model": "gpt-3.5-turbo",
    "messages": [{ "role": "user", content: userMessage}]
    })
  }
}

const handleChat = () => {
  //Create a chat element with passed message and className
  userMessage = chatInput.value.trim();
  
  if (!userMessage) return;

  //Append the user's message to the chatbox
  chatBox.appendChild(createChatLi(userMessage, "outgoing"))
  

setTimeout (() => {
  //Display "Thinking..." message while waiting for the message
chatBox.appendChild(createChatLi("Thinking...", "incoming"));
generateResponse();
}, 600);

  createChatLi( userMessage, "outgoing") ? `<p>${message}</p>`: `<span id="send-btn" class="material-symbols-outlined"> `
  chatLi.innerHTML = chatContent;
  return chatLi;
}

sendChatBtn.addEventListener("click", handleChat);
