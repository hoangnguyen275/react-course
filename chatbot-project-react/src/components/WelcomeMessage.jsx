import './WelcomeMessage.css'

export function WelcomeMessage({chatMessages}){
  return (
    <div className="welcome-message">
      {chatMessages.length === 0 ? 'Welcome to the chatbot project! Send a message using the textbox below.' : ''}
    </div>
  );
}