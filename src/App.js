import { useState } from "react";
import "./App.css";
import Chat from "./components/chat/Chat";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    return (
        <div className="app">
            <div className="app_body">
                <Sidebar
                    setSideMenuOpen={setSideMenuOpen}
                    isOpen={sideMenuOpen}
                />
                <Chat setSideMenuOpen={setSideMenuOpen} isOpen={sideMenuOpen} />
            </div>
        </div>
    );
}

export default App;
