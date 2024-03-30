import React,{useState} from "react";
import './chat.css';
import logo from '../assets/logo_chat.png'
import UserLogo from "../assets/user-logo";
import DeleteLogo from "../assets/delete-logo";
import HistoryLogo from "../assets/history-logo";
import ChatLogo from "../assets/chat-logo";
import EditLogo from "../assets/edit-logo";
import UpdatesLogo from "../assets/updates-logo";
import UpgradeLogo from "../assets/upgrade-logo";
import TandCLogo from "../assets/tandc-logo";
import PrivacyLogo from "../assets/privacy-logo";
import QuestionLogo from "../assets/question-mark-logo";
import PenLogo from "../assets/pen-logo";
import SendLogo from "../assets/send-logo";
function Chat(){
    const [selectedOption, setSelectedOption] = useState("marketing");
    const handleDropdownChange =  (e) =>{
        setSelectedOption(e.target.value);
    }

    return(
        <div className="chat-container">
        <div className="top-bar">
            <div className="logo-box">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
            </div>            
            <div className="dropdown">
                <select className="dropdown-text" value={selectedOption} onChange={handleDropdownChange}>
                <option value="sales">Department : Sales</option>
                <option value="marketing">Department : Marketing</option>
                <option value="operations">Department : Operations</option>
                </select>
            </div>
            
                <UserLogo/>
            
            <div className="user">User</div>
        </div>

        <div className="side-bar-container">
            <div className="new-chat-container">
                <div className="new-chat">+ New Chat</div>
            </div>

            <div className="history">
                <HistoryLogo/>
                <div className="history-text">History</div>
            </div>

            <div className="chat-history-container">
                <ChatLogo/>
                <div className="chat-history-text">New Chat</div>
                <EditLogo/>
                <DeleteLogo/>
            </div>

            <UpgradeLogo/>
            <div className="upgrade">Upgrade to Plus</div>
            <UpdatesLogo/>
            <div className="updates">Updates & FAQ</div>
            <TandCLogo/>
            <div className="tandc"> Terms and Conditions</div>
            <PrivacyLogo/>
            <div className="privacy">Privacy Policy Page</div>
        </div>

        <div className="intro-container">
                <div className="intro-heading">Introduce yourself to AIWorkSquad</div>
                <div className="intro-placeholder">I'm abc, employee of xyz company </div>
                <PenLogo/>
            </div>
        <div className="chat-area-container">

            <div className="text-area-container">
                <QuestionLogo/>
                <div className="text-placeholder">
                    <input type="text" placeholder={`Enter your ${selectedOption} query here...`} /></div>
                <SendLogo/>
            </div>
        </div>
            <div className="message">Type your next question above or select one from the related question section</div>
        </div>
        
    )
}

export default Chat;