import React from "react";
import "./sidebar.css";
import { Avatar, IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import SidebarChat from "../sidebarchat/SidebarChat";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Sidebar = (props) => {
    const handleToggleSidebar = () => {
        props.setSideMenuOpen(!props.isOpen);
    };
    return (
        <div
            className={`sidebar ${
                props.isOpen ? "sidebar_closeSideMenu" : "sidebar_openSideMenu"
            }`}
        >
            <div className="sidebar_header">
                <Avatar src={process.env.PUBLIC_URL + "image.jpg"} />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    {props.isOpen && (
                        <IconButton onClick={handleToggleSidebar}>
                            <ChevronLeftIcon />
                        </IconButton>
                    )}
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search or start new chat" />
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    );
};

export default Sidebar;
