import React, { useState } from "react";
import "./chat.css";
import { Avatar, IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Chat = (props) => {
    const [input, setInput] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();
    };
    const handleToggleSidebar = () => {
        props.setSideMenuOpen(!props.isOpen);
    };
    return (
        <div className="chat">
            <div className="chat_header">
                {!props.isOpen && (
                    <IconButton onClick={handleToggleSidebar}>
                        <ChevronRightIcon />
                    </IconButton>
                )}
                <Avatar src={process.env.PUBLIC_URL + "/image.jpg"} />
                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">Message user</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat_message chat_reciever">
                    <span className="chat_name">Message user</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input
                        type="text"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        placeholder="Enter a message"
                    />
                    <IconButton onClick={sendMessage} type="submit">
                        <SendIcon />
                    </IconButton>
                </form>
                <MicIcon />
            </div>
        </div>
    );
};

export default Chat;
