import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import LoadingSpinnerGif from '../assets/loading-spinner.gif'
import './ChatMessage.css'
import dayjs from 'dayjs'

type ChatMessageProps = {
  message: string;
  sender: 'user' | 'robot';
  timeSent?: string;
};

export function ChatMessage({message, sender, timeSent}: ChatMessageProps){
  //const message = props.message;
  //cosnt sender = sender.message;
  //const {sender, message} = props;
  /*
    if (sender === 'user'){
    return (
      <div>
        {message}
        <img width="50" src="user.png"/>
      </div>
    );
  } else {
      return (
        <div>
          <img width="50" src="robot.png"/>
          {message}
        </div>
      );
    }
  */
  
  return (
        <div className={
          sender === 'robot' 
            ? 'chat-message-robot' 
            : 'chat-message-user'
        }>
          {sender === 'robot' && (
            <img className="chat-message-profile" 
              src={RobotProfileImage}
            />
          )}
          <div className="chat-message-text">
            <div>
              {message === 'isLoading' ?
                <img className="loading-spinner-gif" src={LoadingSpinnerGif}/> :
                message
              }
            </div>
            {timeSent ? 
            <div className="message-time">
              {dayjs(timeSent).format('h:mm:ssa')}
            </div> : 
            ''
            }
          </div>
          {sender ==='user' && (
            <img className="chat-message-profile"
              src={UserProfileImage}
            />
          )}
        </div>
      );
  
}