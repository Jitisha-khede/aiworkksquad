import React from "react";
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

function Chat(){
    return(
        <div>
        <div className="top-bar">
            <div className="logo-box">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
            </div>            
            <div className="dropdown">
                <select className="dropdown-text">
                <option value="fruit">Department : Sales</option>
                <option value="vegetable">Department : Marketing</option>
                <option value="meat">Department : Operations</option>
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

        </div>

    )
}

export default Chat;