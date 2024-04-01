import React,{useState,useRef} from "react";
import './chat.css';
import logo from '../assets/logo_chat.png'
import UserLogo from "../assets/user-logo";
import DeleteLogo from "../assets/delete-logo";
import HistoryLogo from "../assets/history-logo";
import ChatLogo from "../assets/chat-logo";
import UpdatesLogo from "../assets/updates-logo";
import UpgradeLogo from "../assets/upgrade-logo";
import TandCLogo from "../assets/tandc-logo";
import PrivacyLogo from "../assets/privacy-logo";
import QuestionLogo from "../assets/question-mark-logo";
import SendLogo from "../assets/send-logo";
function Chat(){
    const [selectedOption, setSelectedOption] = useState("marketing");
    const [editMode, setEditMode] = useState(false);
    const [editMode2, setEditMode2] = useState(false);
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const handleDropdownChange =  (e) =>{
        setSelectedOption(e.target.value);
    }
    const handleEditClick = () => {
        setEditMode(true);
        inputRef.current.focus();
        console.log('edit');// Enable edit mode when edit button is clicked
    }
    const handleEditClick2 = () => {
        setEditMode2(true);
        inputRef.current.focus();
        console.log('edit');// Enable edit mode when edit button is clicked
    }
    const handleBlur = () => {
        setEditMode(false);
    }
    const handleBlur2 = () => {
        setEditMode2(false);
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
            <div>
                <button className="new-chat-container">+ New Chat</button>
            </div>

            <div className="history">
                <HistoryLogo/>
                <div className="history-text">History</div>
            </div>

            <div className="chat-history-container">
                <ChatLogo/>
                <div className="chat-history-text">
                    <input type="text" placeholder="New Chat" className={`new-chat ${editMode ? 'editable' : ''}`}
                     readOnly={!editMode} ref={inputRef} onBlur={handleBlur} style={editMode ? { outline: '1px solid blue' } : {}} />
                </div>
                <div className="edit-button">

                    <button style={{ border: 'none', background: 'none' }} onClick={handleEditClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 18 18">
                            <title>pen writing 4</title>
                            <g fill="#212121" class="nc-icon-wrapper">
                                <path d="M4.25,10.25h-1c-.828,0-1.5,.672-1.5,1.5h0c0,.828,.672,1.5,1.5,1.5H14.75c.828,0,1.5,.672,1.5,1.5h0c0,.828-.672,1.5-1.5,1.5h-2" fill="none" stroke="#212121" 
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" data-color="color-2">
                                </path>
                                <path d="M6.836,10.164s2.034-.034,2.75-.75,5.25-5.25,5.25-5.25c.552-.552,.552-1.448,0-2-.552-.552-1.448-.552-2,0,0,0-4.534,4.534-5.25,5.25s-.75,2.75-.75,2.75Z" fill="none" stroke="#212121"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                                </path>
                            </g>
                        </svg>
                        </button>
                    </div>
                <DeleteLogo/>
            </div>

            <UpgradeLogo/>
            <div className="upgrade"><a href="#"> Upgrade to Plus</a></div>
            <UpdatesLogo/>
            <div className="updates"><a href="#"> Updates & FAQ</a></div>
            <TandCLogo/>
            <div className="tandc"><a href="#"> Terms and Conditions</a></div>
            <PrivacyLogo/>
            <div className="privacy"><a href="#"> Privacy Policy Page</a></div>
        </div>

        <div className="intro-container">
                <div className="intro-heading">Introduce yourself to AIWorkSquad</div>
                <div className="intro-placeholder">
                    <input type="text" placeholder="Enter your details here" className={`intro-placeholder ${editMode2 ? 'editable' : ''}`}
                     readOnly={!editMode2} ref={inputRef2} onBlur={handleBlur2} style={editMode2 ? { outline: '1px solid blue' } : {}}/>
                </div>
                
                <div className="pen-logo"> 
                    <button style={{ border: 'none', background: 'none' }} onClick={handleEditClick2}>                   
                        <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 18 18">
                        <title>pen 3</title>
                        <g fill="#212121" class="nc-icon-wrapper">
                        <path d="M10,5l3.586,3.586c.781,.781,.781,2.047,0,2.828l-1.586,1.586" fill="none" 
                        stroke="#212121" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        data-color="color-2"></path><path d="M2.75,15.25s3.599-.568,4.546-1.515c.947-.947,7.327-7.327,7.327-7.327,.837-.837,.837-2.194,0-3.03-.837-.837-2.194-.837-3.03,0,0,0-6.38,6.38-7.327,7.327s-1.515,4.546-1.515,4.546h0Z" 
                        fill="none" stroke="#212121" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></g></svg>
                    </button>
                </div>

            </div>
            
                <div className="sender-message-container">
                    message
                </div>
                <div className="question-mark-logo-message">
                    <svg class="w-6 h-6" fill="#FFFFFFF" id="Flat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                    <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-11.55,39.29c-4.79,5-9.75,10.17-12.38,16.52-2.52,6.1-2.63,13.07-2.73,19.82-.1,7-.21,14.33-3.32,17.43s-10.39,3.22-17.43,3.32c-6.75.1-13.72.21-19.82,2.73-6.35,2.63-11.52,7.59-16.52,12.38S132,224,128,224s-9.15-4.92-14.11-9.69-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82-2.63-6.35-7.59-11.52-12.38-16.52S32,132,32,128s4.92-9.15,9.69-14.11,9.75-10.17,12.38-16.52c2.52-6.1,2.63-13.07,2.73-19.82.1-7,.21-14.33,3.32-17.43S70.51,56.9,77.55,56.8c6.75-.1,13.72-.21,19.82-2.73,6.35-2.63,11.52-7.59,16.52-12.38S124,32,128,32s9.15,4.92,14.11,9.69,10.17,9.75,16.52,12.38c6.1,2.52,13.07,2.63,19.82,2.73,7,.1,14.33.21,17.43,3.32s3.22,10.39,3.32,17.43c.1,6.75.21,13.72,2.73,19.82,2.63,6.35,7.59,11.52,12.38,16.52S224,124,224,128,219.08,137.15,214.31,142.11ZM140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180Zm28-72c0,17.38-13.76,31.93-32,35.28V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36S168,88.15,168,108Z"/>
                    </svg>
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