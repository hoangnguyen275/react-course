import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'
import dayjs from 'dayjs';

type ChatInputProps = {
  chatMessages: {
    message: string;
    sender: string;
    id: string;
  }[];
  setChatMessages: (chatMessages: {
    message: string;
    sender: string;
    id: string;
  }[]) => void;
};

export function ChatInput({chatMessages, setChatMessages}: ChatInputProps){
  const [inputText, setInputText] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event: React.ChangeEvent<HTMLInputElement>){
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
          message: 'isLoading',
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

  function pressKeyDown(event: React.KeyboardEvent<HTMLInputElement>){
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
        size={30} 
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