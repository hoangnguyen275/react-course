import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import { WelcomeMessage } from './components/WelcomeMessage'
import { Chatbot } from 'supersimpledev'
import './app.css'

function App(){
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);
  // const [chatMessage, setChatMessage] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  useEffect(()=> {
    Chatbot.addResponses({
      "What's up dawg?": "My dawggggg, how can I help you?"
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages])  

  return (
    <div className="app-container">
      <ChatMessages 
        chatMessages={chatMessages}
      />

      <WelcomeMessage
        chatMessages={chatMessages}
      />

      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;