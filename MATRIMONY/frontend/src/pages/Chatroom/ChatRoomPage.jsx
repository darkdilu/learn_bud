import { useState, useRef, useEffect } from 'react';
import { IoMdAttach, IoMdCall, IoMdMic, IoMdSend } from 'react-icons/io';

import './ChatRoomPage.css';
import LeftSideBar from '../../components/ActivityLeftSideBar/LeftSideBar';
import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

const ChatRoomPage = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi, how are you?', type: 'received', profilePic: 'assets/Images/propic1.jpg' },
    { id: 2, text: "I'm good, thank you! What about you?", type: 'sent', profilePic: 'assets/Images/propic1.jpg' }
  ]);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();


  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        type: 'sent',
        profilePic: 'assets/Images/propic1.jpg'
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  useEffect(() => {
    // Scroll to the bottom of the messages container
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="activitycontainer">
      <div className="leftsidebar">
        <LeftSideBar />
      </div>
      <div className="main">
        <div className="activity-header">
        <header className="messages-header">
          <span className="back-arrow" onClick={handleBack}><MdOutlineKeyboardArrowLeft /></span>
          <h1 className="title">Sandra Thomas</h1>
          <div className="chat-call" > <IoMdCall />
          </div>
        </header>
        </div>
        <div className="chatroom">
          <div className="chat-messages">
            {messages.map(message => (
              <div key={message.id} className={`message ${message.type}`}>
                <img src={message.profilePic} alt={message.type === 'sent' ? 'Sender' : 'Receiver'} className="profile-icon" />
                <div className="message-content">
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="message-input">
  <input
    type="text"
    placeholder="Type your message..."
    value={inputMessage}
    onChange={(e) => setInputMessage(e.target.value)}
    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
  />
  <IoMdAttach className="pin-icon" />
  <IoMdMic className="mic-icon" />
  <button className="send-button" onClick={handleSendMessage}>
    <IoMdSend />
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default ChatRoomPage;
