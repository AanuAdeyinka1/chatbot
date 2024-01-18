const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;
const API_KEY = "";
//"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"
const createChatLi = (message, className) => {
  //create chat <li> element with passed message and className
const chatLi = document.createElement("li");
chatLi.classList.add("chat", className);
let chatContent = className === "outgoing"? `<p></p>`: `<span id="send-btn" class="material-symbols-outlined"></span><p></p> `;
chatLi.innerHTML = chatContent; 
chatLi.querySelector("p").textContent = message;
return chatLi;   
}

// const generateResponse = (incomingChatLi) => {
//   const API_URL = "https://api.openai.com/v1/chat/completions";
//   const messageElement = incomingChatLi.querySelector("p");

//   //Define the properties and message for the API request
//   const requestOptions ={
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${API_KEY}`
//     },
//     body: JSON.stringify({
    
//     "model": "gpt-3.5-turbo",
//     "messages": [{ role: "user", content: userMessage}]
//     })
//   }
//   //Send POST request to API, get response
//   fetch(API_URL, requestOptions).then(res.json()).then(data => {
//     messageElement.textContent = data.choices[0].message.content;
//   }).catch((error) =>{
//     messageElement.textContent ="Oops! Something went wrong. Pls try again";
//   }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
// }

const handleChat = () => {
  //Create a chat element with passed message and className
  userMessage = chatInput.value.trim();
  
  if (!userMessage) return;

  //Append the user's message to the chatbox
  chatbox.appendChild(createChatLi(userMessage, "outgoing"))
  chatbox.scrollTo(0, chatbox.scrollHeight);

setTimeout (() => {
  //Display "Thinking..." message while waiting for the message
  const incomingChatLi = createChatLi(
    "No problem! Let me connect you to a customer support agent.",
    "incoming"
  );
const incomingChatLi2 = createChatLi(
  "Hi there, I an Hannah.How may I help you?",
  "incoming"
);
 
chatbox.appendChild(incomingChatLi);
chatbox.appendChild(incomingChatLi2);
chatbox.scrollTo(0, chatbox.scrollHeight);
generateResponse(incomingChatLi);
}, 600);

}

sendChatBtn.addEventListener("click", handleChat);
