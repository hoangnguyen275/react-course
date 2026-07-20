import { useRef, useEffect, type DependencyList } from 'react'
import { ChatMessage } from './ChatMessage'
import './ChatMessages.css'

type ChatMessagesProps = {
  chatMessages: {
    id: string;
    message: string;
    sender: 'user' | 'robot';
    timeSent?: string;
  }[];
};

function useAutoScroll(dependencies: DependencyList){
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const containerElem = containerRef.current;
    if (containerElem){
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return containerRef;
}


function ChatMessages({chatMessages}: ChatMessagesProps){

  const chatMessagesRef = useAutoScroll([chatMessages]);

  return (
    <div className="chat-messages-container"
      ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage 
            message={chatMessage.message}
            sender={chatMessage.sender}
            timeSent={chatMessage.timeSent}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
} 

export default ChatMessages;