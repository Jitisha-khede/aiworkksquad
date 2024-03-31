import React,{useState,useRef} from "react";
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
                    <input type="text" placeholder="New Chat jblk.jblhuvyvtctclotc" className={`new-chat ${editMode ? 'editable' : ''}`}
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