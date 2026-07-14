import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import LoadingSpinnerGif from '../assets/loading-spinner.gif'
import './ChatInput.css'
import dayjs from 'dayjs';

export function ChatInput({chatMessages, setChatMessages}){
  const [inputText, setInputText] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event){
    setInputText(event.target.value);
  }

  async function sendMessage(){

    if (!isLoading && inputText) {

      const newChatMessages = [
        ...chatMessages,
        {
          message: inputText,
          sender: 'user',
          timeSent: dayjs().valueOf(),
          id: crypto.randomUUID()
        }
      ]
      setChatMessages(newChatMessages);

      setInputText('');

      setChatMessages([
        ...newChatMessages,
        {
          message: <img className="loading-spinner-gif" src={LoadingSpinnerGif}/>,
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ]);

      setIsLoading(true);

      const response = await Chatbot.getResponseAsync(inputText);

      setChatMessages([
        ...newChatMessages,
        {
          message: response,
          sender: 'robot',
          timeSent: dayjs().valueOf(),
          id: crypto.randomUUID()
        }
      ]);

      setIsLoading(false);
    } else{
      return;
    }

  }

  function pressKeyDown(event){
    if (event.key === 'Enter'){
      sendMessage();
    }

    if (event.key === 'Escape'){
      setInputText('');
    }
  }

  function clearChatMessages(){
    setChatMessages([]);
    
  }

  return (
    <div className="chat-input-container">
      <input 
        className="chat-input"
        placeholder="Send a message to Chatbot" 
        size="30" 
        onChange={saveInputText}
        value={inputText}
        onKeyDown={pressKeyDown}
      />
      <button
        onClick={sendMessage}
        className="send-button"
      >
        Send
      </button> 

      <button
        onClick={clearChatMessages}
        className="clear-button"  
      >
        Clear
      </button>
    </div>
  );
}