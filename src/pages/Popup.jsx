import { useState } from "react";
import PopupWindow from "../Components/PopupWindow.jsx";
import "./Popup.css"
function Popup() {
  const [popupInfo, setPopupInfo] = useState({
    name: "Todo App",
    tech: "React, CSS",
    description: "Task manager app",
    role: "Developer",
    challenges: "State persistence",
  });
  const [isOpen, setIsOpen] = useState(false);
  const closePopup = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <h1 className="portfolio-name">My portfolio</h1>
      <button onClick={() => setIsOpen(true)}>Open popup<br/></button>

      {isOpen && (
        <PopupWindow
          name={popupInfo.name}
          tech={popupInfo.tech}
          description={popupInfo.description}
          role={popupInfo.role}
          challenges={popupInfo.challenges}
          onClose={closePopup} />
      )}
    </div>
  )
};
export default Popup;