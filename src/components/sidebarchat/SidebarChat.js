import React from "react";
import "./sidebarchat.css";
import { Avatar } from "@mui/material";

const SidebarChat = () => {
    return (
        <div className="sidebarchat">
            <Avatar src={process.env.PUBLIC_URL + "/image.jpg"} />
            <div className="sidebarchat_info">
                <h2>Personal Room</h2>
                <p>Me and somemore</p>
            </div>
        </div>
    );
};

export default SidebarChat;
