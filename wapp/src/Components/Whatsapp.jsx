import React, { useState } from 'react';
import './Whatsapp.css';

const Whatsapp = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [sender, setSender] = useState('sender');
  const [time, setTime] = useState('');
  const [name, setName] = useState('Test Username');
  const [profilePic, setProfilePic] = useState('https://i.ibb.co/2Yg7tWv/Rumbiiha-Swaibu.jpg');
  const [status, setStatus] = useState('online');
  const [lastSeenTime, setLastSeenTime] = useState('');

  const addMessage = () => {
    if (inputMessage.trim() === '') return;
    setMessages([...messages, { text: inputMessage, sender, time }]);
    setInputMessage('');
    setTime('');
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <div className='websiteheading'>
        <h1>Whatsapp Fake Ui</h1>
        <p>Please Use it for fun purpose only!</p>
        <br />
      </div>
      <div className="whatsapp-ui">
        <div className="header">
          <button className="back-button">
            <i className="mdi mdi-arrow-left"></i>
          </button>
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="name-status">
            <h2>{name}</h2>
            <span className="status">{status === 'online' ? 'online' : `last seen at ${lastSeenTime}`}</span>
          </div>
          <div className="header-buttons">
            <i className="mdi mdi-phone"></i>
            <img src="https://i.ibb.co/LdnbHSG/ic-action-videocall.png" alt="Video Call" className="header-icon" />
            <i className="mdi mdi-dots-vertical"></i>
          </div>
        </div>
        <div className="chat-window">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              <p>{msg.text}</p>
              {msg.time && <span className="time">{msg.time}</span>}
            </div>
          ))}
        </div>
        <div className="input-box">
          <i className="mdi mdi-emoticon-happy-outline emoji-button"></i>
          <input
            type="text"
            placeholder="Type a message"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <i className="mdi mdi-paperclip attachment-button"></i>
          <i className="mdi mdi-camera camera-button"></i>
          <button className="mic-button">
            <i className="mdi mdi-microphone"></i>
          </button>
        </div>
      </div>
      <div className="controls">
        <input
          type="text"
          placeholder="Type a message"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <select value={sender} onChange={(e) => setSender(e.target.value)}>
          <option value="sender">Sender</option>
          <option value="receiver">Receiver</option>
        </select>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button onClick={addMessage}>+</button>
        <input
          type="text"
          placeholder="Change Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleProfilePicChange}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="online">Online</option>
          <option value="lastSeen">Last Seen</option>
        </select>
        {status === 'lastSeen' && (
          <input
            type="time"
            value={lastSeenTime}
            onChange={(e) => setLastSeenTime(e.target.value)}
          />
        )}
      </div>

      <h3>By Brahmjot Singh</h3>
      <a href="https://github.com/BrahmjotSingh0" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" alt="GitHub Logo" />
      </a>
    </div>
  );
};

export default Whatsapp;