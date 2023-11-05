import React, { useState } from "react";

import { LiveChatIcon } from "../../images/icon/icon";
import ChatWindown from "./ChatWindown";

const LiveChat = () => {
  const [showChat, setShowChat] = useState(false);

  const showChatHandler = () => {
    setShowChat(!showChat);
  };

  return (
    <React.Fragment>
      <button
        style={{
          width: "6rem",
          bottom: "3rem",
          position: "fixed",
          right: "3rem",
          zIndex: "5",
        }}
        className="btn p-0"
        onClick={showChatHandler}
      >
        <LiveChatIcon />
      </button>
      <ChatWindown onCloseChat={showChatHandler} show={showChat} />
    </React.Fragment>
  );
};

export default LiveChat;
