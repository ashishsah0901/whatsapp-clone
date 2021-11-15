import React, { useEffect, useState } from "react";
import "./chat.css";
import { Avatar, IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import axios from "../../axios/axios";
import Pusher from "pusher-js";

const Chat = (props) => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        axios.get("/api/v1/messages/sync").then((response) => {
            setMessages(response.data);
        });
    }, []);
    useEffect(() => {
        const pusher = new Pusher("your id", {
            cluster: "ap2",
        });

        const channel = pusher.subscribe("messages");
        channel.bind("inserted", (data) => {
            setMessages([...messages, data]);
        });
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
            pusher.unbind_all();
            pusher.unsubscribe();
        };
    }, [messages]);
    const sendMessage = async (e) => {
        e.preventDefault();
        await axios
            .post("/api/v1/messages/new", {
                message: input,
                name: localStorage.getItem("whatsapp-clone-username"),
                timestamp: new Date().toUTCString(),
            })
            .then(() => setInput(""));
    };
    const handleToggleSidebar = () => {
        props.setSideMenuOpen(!props.isOpen);
    };
    console.log(messages);
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
                    <h3>Personal Room</h3>
                    <p>Me and somemore</p>
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
                {messages
                    .slice(0)
                    .reverse()
                    .map((message) => (
                        <p
                            className={`chat_message ${
                                message.name ===
                                localStorage.getItem("whatsapp-clone-username")
                                    ? "chat_reciever"
                                    : ""
                            }`}
                            key={message._id}
                        >
                            <span className="chat_name">{message.name}</span>
                            {message.message}
                            <span className="chat_timestamp">
                                {new Date(message.timestamp).toUTCString()}
                            </span>
                        </p>
                    ))}
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
