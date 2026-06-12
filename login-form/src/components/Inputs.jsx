import { useState } from 'react'
import './Inputs.css'

export function Inputs(){
  const [showPassword, setShowPassword] = useState(false);

  const [isTyping, setIsTyping] = useState('');

  function revealPassword(){
    if (!showPassword){
      setShowPassword(true);
    } else{
      setShowPassword(false);
    }
  }

  function saveTyping(event){
    setIsTyping(event.target.value);
    if (!isTyping){
      setShowPassword(false);
    }
  }
  
  return (
    <div className="inputs">
      <div className="inputs-container">
        <input className="email-input" placeholder="Email"/>
        <input className="password-input" placeholder="Password"
        onChange={saveTyping}
        type={!showPassword ? 'password' : 'text'}
        />
      </div>
      <div className="show-button-container">
        <button className={!isTyping ? 'show-button' : 'show-button-visible'}
          onClick={revealPassword}
        >
          {!showPassword ? 'show' : 'hide'}
        </button>
      </div>
    </div>
  );
}
